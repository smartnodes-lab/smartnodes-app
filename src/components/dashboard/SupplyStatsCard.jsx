import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import CircularProgress from '@mui/material/CircularProgress';

const SupplyStatsCard = ({ supplyStats }) => {
  // Check if data is still loading
  const isLoading = !supplyStats || supplyStats.length < 3 || 
                    supplyStats.some(item => item.amount === "-" || isNaN(Number(item.amount)));

  // Extract necessary amounts
  const totalSupply = !isLoading ? (supplyStats.find(item => item.title === "Total Supply")?.amount || 0) : 0;
  const locked = !isLoading ? (supplyStats.find(item => item.title === "Locked")?.amount || 0) : 0;
  const unclaimed = !isLoading ? (supplyStats.find(item => item.title === "Unclaimed Rewards")?.amount || 0) : 0;

  // Compute circulating supply
  const circulatingSupply = totalSupply - locked - unclaimed;

  // Format percentage for tooltip
  const formatPercentage = (value) => {
    const percentage = (value / totalSupply) * 100;
    return percentage.toFixed(2) + '%';
  };

  // Format number for display
  const formatNumber = (number) => {
    return number.toLocaleString(undefined, { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 1 
    });
  };

  // Prepare pie chart data with subcategories for tooltips
  const pieData = !isLoading ? [
    { 
      id: 0, 
      value: locked, 
      label: "Locked", 
      color: "#22F280",
      subcategories: [
        { name: "Amount", value: formatNumber(locked) + " SNO" },
        { name: "Percentage", value: formatPercentage(locked) },
        { name: "Category", value: "Locked in contracts" }
      ]
    },
    { 
      id: 1, 
      value: unclaimed, 
      label: "Unclaimed", 
      color: "#22FFFF",
      subcategories: [
        { name: "Amount", value: formatNumber(unclaimed) + " SNO" },
        { name: "Percentage", value: formatPercentage(unclaimed) },
        { name: "Category", value: "Pending rewards" }
      ]
    },
    { 
      id: 2, 
      value: circulatingSupply, 
      label: "Circulating", 
      color: "#FF3F93",
      subcategories: [
        { name: "Amount", value: formatNumber(circulatingSupply) + " SNO" },
        { name: "Percentage", value: formatPercentage(circulatingSupply) },
        { name: "Category", value: "Actively traded" }
      ]
    }
  ] : [];

  // Loading spinner component
  const LoadingSpinner = () => (
    <CircularProgress className="mt-5"/>  
  );

  return (
    <div className="flex flex-row">
      <div className="bg-gray-200 max-w-[700px] dark:bg-slate-800 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-10 ss:pt-16 m-3 border border-gray-600">
        {/* Display "Current Supply" on top */}
        {supplyStats.map((item, index) => (
          item.title === "Total Supply" && (
            <div className="mb-4 mt-1" key={index}>
              <p className="font-bold text-xl md:text-2xl text-gray-400">{item.title}</p>
              <div className="flex items-baseline">
                <p className="xs:text-3xl text-2xl md:text-4xl font-semibold break-words max-w-full overflow-hidden">
                  {(isNaN(Number(item.amount)) ? '-' : Number(item.amount).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 }))}
                </p>
                <p className="xs:text-2xl text-lg ml-2">SNO</p>
              </div>
            </div>
          )
        ))}

        {/* Display the rest of the values in the row beneath */}
        <div className="flex flex-wrap justify-start mb-3 items-center">
          {supplyStats.map((item, index) => (
            item.title !== "Total Supply" && (
              <div key={index} className="mr-5">
                <div key={index}>
                  <p className="font-bold md:text-xl text-gray-400 mt-2">{item.title}</p>
                  <p className="text-2xl break-words max-w-full overflow-hidden">
                    {(isNaN(Number(item.amount)) ? '-' : Number(item.amount).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 }))}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Right: Pie Chart (only show on md+ screens) */}
      <div className="hidden md:flex flex-col items-center justify-center md:bg-gray-200 md:dark:bg-slate-800 md:rounded-xl md:w-auto md:h-auto my-3 min-w-[420px] border border-gray-600">
        <p className="text-xl font-bold text-gray-600 dark:text-gray-300 mt-4">Supply Distribution</p>
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <PieChart
            series={[{
              data: pieData,
              innerRadius: 25,
              outerRadius: 130,
              paddingAngle: 1,
              cornerRadius: 5,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            }]}
            width={400}
            height={300}
            margin={{ top: 10, bottom: 10, left: 120, right: 10 }}
            slotProps={{
              legend: {
                direction: 'column',
                position: { vertical: 'middle', horizontal: 'left' },
                itemMarkWidth: 6,
                itemMarkHeight: 6,
                markGap: 4,
                itemGap: 10,
                labelStyle: {
                  fontSize: 15,
                  fill: 'grey',
                  maxWidth: 80,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SupplyStatsCard;
