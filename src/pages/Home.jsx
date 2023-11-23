import { LineChart, CircularChart } from "../components";
import styles from "../style";
import React, { useState, useEffect } from "react";
 
const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // Fetch data from the endpoint
    fetch('http://127.0.0.1:5000/usd/WALCL')
      .then(response => response.json())
      .then(data => setData(data['WALCL'].slice(-100, -1)))
      .catch(error => console.error('Error fetching data:', error));
    
    fetch("http://127.0.0.1:5000/usd/WM2NS")
      .then(response => response.json())
      .then(data2 => setData2(data2["WM2NS"].slice(-100, -1)))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
    return (
      <div className={`h-full w-full ${styles.flexCenter}`}>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
              <LineChart data={data} title="FED Balance Sheet"/>
              <LineChart data={data2} title="M2 Money Supply" className="ml-20"/>
        </div>
      </div>
    )
}

export default Home;
