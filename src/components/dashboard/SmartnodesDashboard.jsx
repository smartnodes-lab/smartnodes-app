import React, { useState, useEffect } from 'react';
import { LineChart } from "@mui/x-charts/LineChart";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from "../../contexts/contextProvider";

const networkTitles = {
  0: "Tensorlink",
  1: "StarNet",
  2: "Framework"
};

// Function to format capacity to nearest order of magnitude
const formatCapacity = (bytes) => {
  if (bytes === 0) return '0 B';
  
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const base = 1024;
  
  // Find the appropriate unit
  const unitIndex = Math.floor(Math.log(bytes) / Math.log(base));
  
  // Calculate the value in that unit
  const value = bytes / Math.pow(base, unitIndex);
  
  // Round to 2 significant digits
  const rounded = Math.round(value * 100) / 100;
  
  return `${rounded} ${units[unitIndex]}`;
};

const SmartnodesDashboard = ({ contract, multisig }) => {  
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark"; // White for dark, black for light

  // Constants for time/block limits
  const BLOCKS_PER_DAY = 7200; // Approximate blocks per day (12s per block)
  const DAYS_TO_FETCH = 60; // Fetch last 90 days of data
  const CHUNK_SIZE = 5000; // Number of blocks per request

  const fetchBlockTimestamps = async (events, provider) => {
    const blockPromises = events.map(event => provider.getBlock(event.blockNumber));
    const blocks = await Promise.all(blockPromises);
    
    return events.map((event, index) => ({
      ...event,
      timestamp: new Date(blocks[index].timestamp * 1000), // Convert Unix timestamp to Date
    }));
  };

  const fetchContractEvents = async (contract, multisig) => {
    if (!contract) return;
    
    try {
      setError(null);
      setLoading(true);
      
      const provider = contract.runner?.provider;
      const currentBlock = await provider.getBlockNumber();
      const startBlock = Math.max(0, currentBlock - (BLOCKS_PER_DAY * DAYS_TO_FETCH));
      
      const allEvents = [];
      
      // Fetch events in chunks
      for (let fromBlock = startBlock; fromBlock <= currentBlock; fromBlock += CHUNK_SIZE) {
        const toBlock = Math.min(fromBlock + CHUNK_SIZE - 1, currentBlock);
        
        try {
          const events = await contract.queryFilter("StateUpdate", fromBlock, toBlock);
          allEvents.push(...events);
        } catch (chunkError) {
          console.warn(`Error fetching chunk ${fromBlock}-${toBlock}:`, chunkError);
          continue;
        }
      }

      if (allEvents.length === 0) {
        setError(`No events found in the last ${DAYS_TO_FETCH} days`);
        setLoading(false);
        return;
      }

      // Transform the data
      const eventData = allEvents.map(event => {
        const baseData = {
          blockNumber: event.blockNumber,
          timestamp: null, // Will be filled later
        };
        
        // Extract capacities for each network
        if (event.args && Array.isArray(event.args.networkCapacities)) {
          event.args.networkCapacities.forEach((capacity, index) => {
            baseData[`capacity${index}`] = Number(capacity);
            // Also store formatted capacity for tooltips
            baseData[`formattedCapacity${index}`] = formatCapacity(Number(capacity));
          });
        }
        
        // Extract workers for each network
        if (event.args && Array.isArray(event.args.networkWorkers)) {
          event.args.networkWorkers.forEach((workers, index) => {
            baseData[`workers${index}`] = Number(workers);
          });
        }
        
        return baseData;
      });

      // Fetch timestamps and replace block numbers with timestamps
      const enrichedData = await fetchBlockTimestamps(eventData, provider);
      
      // Sort events by timestamp
      enrichedData.sort((a, b) => a.timestamp - b.timestamp);
      
      setChartData(enrichedData);
      setLoading(false);
      
    } catch (error) {
      console.error("Error fetching StateUpdate events:", error);
      setError(`Error fetching events: ${error.message}`);
      setLoading(false);
    }
  };  

  useEffect(() => {
    fetchContractEvents(contract, multisig);

    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      fetchContractEvents(contract, multisig);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [contract, multisig]);

  useEffect(() => {
    const isDarkTheme = theme === "dark";
  }, [theme])

  // Different colors for capacities and workers
  const capacityColors = ['#2563eb', '#16a34a', '#d97706', '#7c3aed', '#0ea5e9'];
  const workerColors = ['#dc2626', '#ef4444', '#f97316', '#ec4899', '#8b5cf6'];

  // Count how many networks we have data for
  const getNetworkCount = () => {
    if (chartData.length === 0) return 0;
    
    let count = 0;
    while (`capacity${count}` in chartData[0]) {
      count++;
    }
    return count;
  };

  // Prepare data for workers chart
  const prepareWorkersChartData = () => {
    if (chartData.length === 0) return { xAxis: [], series: [] };
    
    const dates = chartData.map(d => d.timestamp);
    const networkCount = getNetworkCount();
    
    const series = [];
    
    for (let i = 0; i < networkCount; i++) {
      series.push({
        data: chartData.map(d => d[`workers${i}`]),
        label: `${networkTitles[i] || `Network ${i + 1}`}`,
        color: workerColors[i % workerColors.length],
        showMark: false,
      });
    }

    return {
      xAxis: [{ 
        data: dates,
        scaleType: 'time',
        // This formatter is only for the axis labels - show just the date
        valueFormatter: (date) => 
          new Intl.DateTimeFormat('en-US', { 
            month: 'short', 
            day: '2-digit',
            hour: '2-digit'
          }).format(new Date(date)),
      }],
      series: series
    };
  };

  // Prepare data for capacity chart
  const prepareCapacityChartData = () => {
    if (chartData.length === 0) return { xAxis: [], series: [] };
    
    const dates = chartData.map(d => d.timestamp);
    const networkCount = getNetworkCount();
    
    const series = [];
    
    // Add lines for each network's capacity
    for (let i = 0; i < networkCount; i++) {
      series.push({
        data: chartData.map(d => d[`capacity${i}`]),
        label: `${networkTitles[i] || `Network ${i + 1}`}`,
        color: capacityColors[i % capacityColors.length],
        showMark: false,
        valueFormatter: (value) => formatCapacity(value),
      });
    }
    
    return {
      xAxis: [{ 
        data: dates,
        scaleType: 'time',
        // This formatter is only for the axis labels - show just the date
        valueFormatter: (date) => 
          new Intl.DateTimeFormat('en-US', { 
            month: 'short', 
            day: '2-digit',
            hour: '2-digit'
          }).format(new Date(date)),
      }],
      series: series
    };
  };

  
  // Prepare separate network charts (one chart per network with both capacity and workers)
  const prepareNetworkCharts = () => {
    if (chartData.length === 0) return [];
    
    const dates = chartData.map(d => d.timestamp);
    const networkCount = getNetworkCount();
    
    const charts = [];
    
    for (let i = 0; i < networkCount; i++) {
      charts.push({
        title: networkTitles[i] || `Network ${i + 1}`,
        capacityChart: {
          xAxis: [{ 
            data: dates,
            scaleType: 'time',
            valueFormatter: (date) => date.toLocaleDateString(),
          }],
          series: [
            {
              data: chartData.map(d => d[`capacity${i}`]),
              label: 'Capacity',
              color: capacityColors[i % capacityColors.length],
              showMark: false,
              valueFormatter: (value) => formatCapacity(value),
            }
          ]
        },
        workersChart: {
          xAxis: [{ 
            data: dates,
            scaleType: 'time',
            valueFormatter: (date) => date.toLocaleDateString(),
          }],
          series: [
            {
              data: chartData.map(d => d[`workers${i}`]),
              label: 'Workers',
              color: workerColors[i % workerColors.length],
              showMark: false,
            }
          ]
        }
      });
    }
    
    return charts;
  };
  
  const capacityChartData = prepareCapacityChartData();
  const workersChartData = prepareWorkersChartData();
  const networkCharts = prepareNetworkCharts();

  if (error) {
    return (
      <Box p={2}>
        <Card>
          <CardContent>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
              <Box mt={2}>
                <Button 
                  variant="outlined" 
                  color="error" 
                  size="small"
                  onClick={() => fetchContractEvents(contract, multisig)}
                >
                  Retry
                </Button>
              </Box>
            </Alert>
          </CardContent>
        </Card>
      </Box>
    );
  }

  const ChartContainer = ({ children, title, subheader }) => (
    <div className="bg-gray-200 dark:bg-slate-700 h-30 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl border border-gray-600">
      <h2 className="ml-5 pt-4 text-xl font-bold">{title}</h2>
      <h4 className="ml-5 text-sm">{subheader || `Last ${DAYS_TO_FETCH} days`}</h4>
      <CardContent
        sx={{
          //change left yAxis label styles
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
            strokeWidth:0.7,
            fill:"#808080"
          },
          // change bottom label styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
              strokeWidth:0.7,
              fill:"#808080"
          },
            // bottomAxis Line Styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
            stroke:"#808080",
            strokeWidth:0.5
          },
          // leftAxis Line Styles
          "& .MuiChartsAxis-left .MuiChartsAxis-line":{
            stroke: "#808080",
            strokeWidth:0.5
          },
          '& .MuiChartsLegend-label': {
            stroke: "#808080",
            fontSize: '0.875rem', // equivalent to text-sm
          }
      }}>
        {loading ? (
          <Box sx={{ height: 290, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress size={40} />
          </Box>
        ) : chartData.length === 0 ? (
          <Box sx={{ height: 290, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">No data available</Typography>
          </Box>
        ) : (
          children
        )}
      </CardContent>
    </div>
  );

  return (
    <Box p={2}
      className="-mr-7 -ml-2 xs:-mr-0 xs:-ml-0"
    >
      {/* Workers chart for all networks */}
      <ChartContainer title="Active Workers">
        <LineChart
          height={320}
          series={workersChartData.series}
          xAxis={workersChartData.xAxis}
          curve="catmullRom" // Makes the line curvy
          slotProps={{
            legend: {
              position: {
                vertical: 'top',
                horizontal: 'right',
              },
              itemMarkWidth: 10,
              itemMarkHeight: 2
            }
          }}
        />
      </ChartContainer>

      {/* Spacer for better separation */}
      <div className="py-4" />

      {/* Capacity chart for all networks */}
      <ChartContainer title="Network Capacities">
        <LineChart
          height={320}
          series={capacityChartData.series}
          xAxis={capacityChartData.xAxis}
          yAxis={[
            {
              valueFormatter: (value) => formatCapacity(value),
            }
          ]}
          curve="catmullRom" // Makes the line curvy
          margin={{ left: 65, right: -5 }}
          slotProps={{
            legend: {
              position: {
                vertical: 'top',
                horizontal: 'right',
              },
              itemMarkWidth: 10,
              itemMarkHeight: 2,
              className: "text-sm text-gray-300",
            },
          }}
        />
      </ChartContainer>

      {/* Individual network charts */}
      {/* {networkCharts.map((chart, index) => (
        <React.Fragment key={index}>
          <Grid item xs={12} md={6}>
            <ChartContainer title={`${chart.title} Capacity`}>
              <LineChart
                height={300}
                series={chart.capacityChart.series}
                xAxis={chart.capacityChart.xAxis}
              />
            </ChartContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <ChartContainer title={`${chart.title} Workers`}>
              <LineChart
                height={300}
                series={chart.workersChart.series}
                xAxis={chart.workersChart.xAxis}
              />
            </ChartContainer>
          </Grid>
        </React.Fragment>
      ))} */}
    </Box>
  );
};

export default SmartnodesDashboard;
