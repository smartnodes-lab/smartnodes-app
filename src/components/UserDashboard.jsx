import { BarChart } from "@mui/x-charts/BarChart";
import styles from "../style"; 


const UserDashboard = ({ nodeId, connectedValidators, connectedWorkers, job }) => {
    return (
      <section className={`xs:px-5 md:px-10 flex flex-col items-center py-5 mt-2`}>
        <h2>SHALLOM</h2>
        <BarChart 
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}/>
      </section>
    );
}

export default UserDashboard;