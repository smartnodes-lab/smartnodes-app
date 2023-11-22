import { LineChart, CircularChart } from "../components";
import styles from "../style";
import React from "react";
 
const Home = () => {
  const data = [
    { date: new Date('2022-01-01'), close: 100 },
    { date: new Date('2022-02-01'), close: 110 },
    { date: new Date('2022-03-01'), close: 140 },
    { date: new Date('2022-04-01'), close: 250 },
    { date: new Date('2022-05-01'), close: 350 },
    { date: new Date('2022-06-01'), close: 320 },
    { date: new Date('2022-07-01'), close: 300 },
    { date: new Date('2022-08-01'), close: 305 }
  ];

  const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];
  const correlations = [
    [0, 0.8, -0.5, 0.2, -0.7],
    [0.8, 0, 0.3, -0.6, 0.4],
    [-0.5, 0.3, 0, 0.9, -0.1],
    [0.2, -0.6, 0.9, 0, 0.7],
    [-0.7, 0.4, -0.1, 0.7, 0],
  ];

    return (
        <div className={`h-full w-full ${styles.flexCenter}`}>
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                <LineChart data={data} />
                <CircularChart categories={categories} correlations={correlations}/>
          </div>
        </div>

    )
}

export default Home;
