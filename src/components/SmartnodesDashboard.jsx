import { LineChart } from "@mui/x-charts/LineChart";
import styles from "../style"; 


const SmartnodesDashboard = ({ nodeId, connectedValidators, connectedWorkers, job }) => {
    return (
      <section className={`xs:px-5 md:px-10 flex flex-col md:flex-row items-center py-5 mt-2`}>
        {/* <h2>SHALLOM</h2> */}
        <LineChart 
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
          series={[
            { 
              data: [1, 1, 2, 2, 4, 3, 3, 2, 3, 4],
              area: true,
              color: "grey"
            },
          ]}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}/>
                  <LineChart 
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
          series={[
            { 
              data: [10, 9, 11, 12, 23, 16, 100, 150, 250, 1000],
              area: true,
              color: "grey"
            },
          ]}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}/>
      </section>
    );
}

export default SmartnodesDashboard;