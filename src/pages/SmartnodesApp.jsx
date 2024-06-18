import React, { useEffect, useState } from 'react';
import { MdOutlineSupervisorAccount, MdOutlineSettings, MdVerifiedUser, MdBusinessCenter, MdOutlineDashboard, MdOutlineHub, MdHeatPump } from 'react-icons/md';
import Spline from "@splinetool/react-spline";
import abiArtifact from "../assets/SmartnodesCore.json";
import styles, { layout } from "../style";
import { Button, NodeDashboard } from "../components";
import { ethers } from 'ethers';

const SmartnodesApp = () => {
  function round(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }

  const [activeDashboard, setActiveDashboard] = useState(null);
  const [status, setStatus] = useState('-');
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState('-');
  const [userBalance, setUserBalance] = useState("-");
  const [error, setError] = useState(''); // State for error message
  const [networkStats, setNetworkStats] = useState([
    { title: "Total Jobs", amount: 0, iconColor: "black", iconBg: "red", icon: <MdOutlineSupervisorAccount/> },
    { title: "Active Validators", amount: 0, iconColor: "black", iconBg: "lightBlue", icon: <MdVerifiedUser/> },
    { title: "Users", amount: 0, iconColor: "black", iconBg: "magenta", icon: <MdBusinessCenter/> }
  ]);
  const [supplyStats, setSupplyStats] = useState([
    { title: "Current Supply", amount: 0 },
    { title: "Current Supply", amount: 0 },
    { title: "Current Supply", amount: 0 },
  ]);
  const dashboardOptions = [
    { title: "Connect to Node", icon: <MdOutlineHub/>, endpoint: "/api/user" },
    // { title: "Validator Dashboard", icon: <MdOutlineHub/>, endpoint: "/api/validator" },
    // { title: "Worker Dashboard", icon: <MdHeatPump/>, endpoint: "/api/worker" }
  ];

  // const RPC_ENDPOINT = "https://sepolia.infura.io/v3/4bb158409bfe45d49cea535f20975671";
  const RPC_ENDPOINT = "http://127.0.0.1:7545";
  // const SEPOLIA_NETWORK_ID = 11155111;
  const SEPOLIA_NETWORK_ID = 5777;
  const contractAddress = '0xEb10D28a6628745388618fdF4ff2CcFc978F439e';
  const abi = abiArtifact.abi;

  // Function to connect to the user's MetaMask wallet
  const connectToContract = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        setContract(contractInstance);
        setUserAddress(accounts[0]); // Save the connected user's address
        setStatus('Wallet connected successfully.');
        setError('');
        const balance = await contractInstance.balanceOf(accounts[0]);
        setUserBalance(ethers.formatUnits(balance, 18)); // Set user token balance
      } catch (error) {
        console.error(error);
        setStatus('Error connecting to wallet.');
      }
    } else {
      setStatus('MetaMask is not installed.');
    }
  };

  // Function to fetch network stats from the smart contract
  const getNetworkStats = async () => {
    if (contract) {
      try {
        let supply = await contract.getSupply();
        let emissionRate = await contract.emissionRate();
        let totalJobs = await contract.getValidatorCount();
        let activeValidators = await contract.getActiveValidatorCount();
        let users = await contract.getUserCount();

        supply = round(ethers.formatUnits(supply, 18), 2);
        totalJobs = ethers.formatUnits(totalJobs, 0);
        activeValidators = ethers.formatUnits(activeValidators, 0);
        users = ethers.formatUnits(users, 0);
        emissionRate = ethers.formatUnits(emissionRate, 18);
        emissionRate = Math.round(emissionRate, 3);
        
        setNetworkStats([
          { title: "Users", amount: users, iconColor: "black", iconBg: "purple", icon: <MdOutlineSupervisorAccount/> },
          { title: "Jobs Completed", amount: totalJobs, iconColor: "black", iconBg: "red", icon: <MdBusinessCenter /> },
          { title: "Active Validators", amount: activeValidators, iconColor: "black", iconBg: "lightBlue", icon: <MdVerifiedUser/> },
          { title: "Active Workers", amount: activeValidators, iconColor: "black", iconBg: "grey", icon: <MdOutlineSettings/> },
        ]);
        setSupplyStats([
          { title: "Total Value Locked", amount: round(supply * 0.002, 2) },
          { title: "Current Supply", amount: supply },
          { title: "State Reward", amount: emissionRate },
          { title: "State Time (s)", amount: 600 },
        ]);

        setStatus('Network stats fetched successfully!');
      } catch (error) {
        console.error(error);
        setStatus('Error fetching network stats.');
      }
    } else {
      setStatus('Connect to the wallet first.');
    }
  };

  // Function to check if Flask instance is running
  const checkFlaskInstance = async (endpoint) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/${endpoint}`);
      if (response.ok) {
        return true;
      } else {
        setError('No Flask instance found.');
        return false;
      }
    } catch (error) {
      console.error('Error connecting to Flask:', error);
      setError('No Flask instance found.');
      return false;
    }
  };

  // Fetch network stats when the component mounts or the contract updates
  useEffect(() => {
    if (contract) {
      getNetworkStats();
    }
  }, [contract]);

  return (
    <section className={`bg-slate-50 dark:bg-gray-900 xs:px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center pb-10`}>
      <div className="absolute md:top-40 right-4">
        <Button
          color="black"
          bgColor="lightGrey"
          text={contract ? "Connected" : "Connect Wallet"}
          borderRadius="10px"
          onClick={connectToContract}
        />  
      </div>

      <div className="max-w-[1280px] items-center w-full">
        <h1 className={`${styles.heading} text-left sm:px-10 md:px-0 xs:px-0 mt-20 md:mt-10 max-w-[1280px] mb-5`}>
          User Dashboard
        </h1>

        <div className="bg-white dark:bg-slate-800 dark:text-gray-200 rounded-xl max-w-[700px] p-3 xs:p-8 pt-7 m-3">
          <div className="mb-5">
            <h2 className={`font-bold text-xl text-gray-400`}>Account</h2>
            <p className="text-2xl overflow-auto font-semibold">{userAddress ? userAddress : "No address connected"}</p>
          </div>  
          <div className="flex flex-wrap">
            <div className="pr-20">
              <p className="font-bold text-xl text-gray-400">Token Balance</p>
              <p className="text-3xl">{userBalance}</p>
            </div>  
          </div>
        </div>

        <div className="flex flex-wrap ml-3 sm:m-3 pt-0 justify-start gap-1 items-center w-full">
          {dashboardOptions.map((item, index) => (
            <button 
              key={index} 
              onClick={async () => {
                if (index === 0) {
                  const flaskRunning = await checkFlaskInstance(item.endpoint);
                  if (flaskRunning) {

                    setActiveDashboard()
                  } else {
                    <h1>Flask instance not found!</h1>
                  }
                }
              }}
              disabled={index !== 0}
              className={`flex bg-slate-50 dark:bg-slate-600 h-25 dark:text-gray-200 dark:bg-secondary-dark-bg
              max-w-[285px] min-w-[285px] p-4 sm:pt-5 mt-5 rounded-2xl mr-5 ${index === 0 
                            ? "hover:border" : ""}`}
            >
              <div
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="flex text-3xl opacity-0.9 p-2 border-gray-300">
                <div className="text-3xl opacity-0.9 rounded-full p-2 border border-gray-300">
                  {item.icon}
                </div>
                <p className="mt-3 ml-3 text-lg font-bold text-gray-200">{item.title}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex mt-8 flex-wrap justify-start border-t dark:border-t-white border-t-black max-w-[1280px]">
          <h1 className={`${styles.subheading} text-left sm:px-5 xs:px-0 mt-20 md:mt-10 max-w-[1280px] mb-5`}>
              Network Overview
          </h1>
          <div className="bg-white max-w-[500px] dark:bg-slate-800 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-7 m-3">
            {/* Display "Current Supply" on top */}
            {supplyStats.map((item, index) => (
              item.title === "Total Value Locked" && (
                <div className="mb-5">
                  <p className="font-bold text-xl text-gray-400">{item.title}</p>
                  <p className="text-4xl font-semibold">${item.amount}</p>
                </div>
              )
            ))}
            
            {/* Display the rest of the values in the row beneath */}
            <div className="flex flex-wrap justify-start mb-7 items-center">
              {supplyStats.map((item, index) => (
                item.title !== "Total Value Locked" && (
                  <div key={index} className="mr-5">
                    <div key={index} className="">
                      <p className="font-bold text-gray-400">{item.title}</p>
                      <p className="text-2xl">{item.amount}</p>
                    </div>
                  </div>
                )
              ))}
            </div>       
          </div>
          <div className="flex flex-wrap m-3 justify-start gap-1 items-center w-full">
            {networkStats.map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg min-w-[250px] max-w-[90%] sm:max-w-[45%] md:max-w-[30%] p-4 pt-7 rounded-2xl m-1">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-3xl opacity-0.9 rounded-full p-3 border border-gray-300 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-2xl font-semibold">{item.amount}</span>
                </p>
                <p className="text-md text-gray-400 mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SmartnodesApp;
