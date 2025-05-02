import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import CircularProgress from '@mui/material/CircularProgress';
import { useMediaQuery } from "react-responsive"; // Install react-responsive if needed

const SupplyStatsCard = ({ supplyStats }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 }); // Tailwind's 'sm' breakpoint

  
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
      color: "#85deca",
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
      color: "#fe2e1e",
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
      color: "#2ef743",
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
    <div className="flex md:flex-row flex-col">
      <div className="bg-gray-200 max-w-[690px] dark:bg-slate-800 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-10 ss:pt-14 -mr-4 xs:-mr-0 m-3 border border-gray-600 md:mr-5">
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
      <div className="flex flex-col items-center rounded-xl justify-center md:bg-gray-300 md:dark:bg-gray-900 md:rounded-xl md:w-auto md:h-auto my-3 min-w-[275px] sm:min-w-[420px] border border-gray-600 -mr-6 sm:-mr-0">
        <p className="text-xl font-bold text-gray-700 dark:text-gray-200 mt-4">Supply Distribution</p>
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <PieChart
            series={[{
              data: pieData,
              innerRadius: isSmallScreen ? 15 : 25,
              outerRadius: isSmallScreen ? 80 : 125,
              paddingAngle: 1,
              cornerRadius: 5,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'black' },
            }]}
            width={isSmallScreen ? 300 : 400}
            height={isSmallScreen ? 220 : 300}
            margin={{ top: isSmallScreen ? -10 : 10, bottom: 10, left: isSmallScreen ? 0 : 120, right: 10 }}
            slotProps={{
              legend: {
                direction: isSmallScreen ? 'row' : 'column',
                position: { vertical: isSmallScreen ? 'bottom' : 'middle', horizontal: isSmallScreen ? 'middle' : 'left' },
                itemMarkWidth: isSmallScreen ? 4 : 6,
                itemMarkHeight: isSmallScreen ? 4 : 6,
                markGap: isSmallScreen ? 2 : 4,
                itemGap: isSmallScreen ? 6 : 10,
                labelStyle: {
                  fontSize: isSmallScreen ? 12 : 15,
                  fill: 'gray',
                  maxWidth: isSmallScreen ? 60 : 80,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                },
              },
            }}
          />

        //   <PieChart
        //     series={[{
        //       data: pieData,
        //       innerRadius: 25,
        //       outerRadius: 125,
        //       paddingAngle: 1,
        //       cornerRadius: 5,
        //       highlightScope: { faded: 'global', highlighted: 'item' },
        //       faded: { innerRadius: 30, additionalRadius: -30, color: 'black' },
        //     }]}
        //     width={400}
        //     height={300}
        //     margin={{ top: 10, bottom: 10, left: 120, right: 10 }}
        //     slotProps={{
        //       legend: {
        //         direction: 'column',
        //         position: { vertical: 'middle', horizontal: 'left' },
        //         itemMarkWidth: 6,
        //         itemMarkHeight: 6,
        //         markGap: 4,
        //         itemGap: 10,
        //         labelStyle: {
        //           fontSize: 15,
        //           fill: 'grey',
        //           maxWidth: 80,
        //           overflow: 'hidden',
        //           whiteSpace: 'nowrap',
        //           textOverflow: 'ellipsis',
        //         },
        //       },
        //     }}
        //   />
        )}
      </div>
    </div>
  );
};

export default SupplyStatsCard;
