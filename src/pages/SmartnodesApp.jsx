import React, { useEffect, useState } from 'react';
import { MdOutlineSupervisorAccount, MdOutlineSettings, MdVerifiedUser, MdBusinessCenter, MdOutlineHub, MdPerson, MdWebhook } from 'react-icons/md';
import { LineChart } from "@mui/x-charts/LineChart";
import abiArtifact from "../assets/SmartnodesCore.json";
import styles, { layout } from "../style";
import { Button, UserDashboard } from "../components";
import { ethers } from 'ethers';
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { connect } from '../assets';

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
    { title: "Users", amount: "-", iconColor: "black", iconBg: "violet", icon: <MdOutlineSupervisorAccount/> },
    { title: "Jobs Completed", amount: "-", iconColor: "black", iconBg: "red", icon: <MdBusinessCenter /> },
    { title: "Active Validators", amount: "-", iconColor: "black", iconBg: "lightBlue", icon: <MdVerifiedUser/> },
    { title: "Active Workers", amount: "-", iconColor: "black", iconBg: "grey", icon: <MdOutlineSettings/> }
  ]);
  const [supplyStats, setSupplyStats] = useState([
    { title: "Total Value Locked", amount: "-" },
    { title: "Current Supply", amount: "-" },
    { title: "State Reward", amount: "-" },
    { title: "State Time (s)", amount: "-" }
  ]);

  const dashboardOptions = [
    { title: "User Dashboard", icon: <MdPerson style={{ color: "violet" }}/>, endpoint: "node", component: <UserDashboard /> },
    { title: "Validator Dashboard", icon: <MdWebhook style={{ color: "lightPink" }}/>, endpoint: "/api/validator" },
    { title: "Worker Dashboard", icon: <MdOutlineHub style={{ color: "lightBlue" }}/>, endpoint: "/api/worker" }
  ];

  // const RPC_ENDPOINT = "https://sepolia.infura.io/v3/4bb158409bfe45d49cea535f20975671";
  const RPC_ENDPOINT = "http://127.0.0.1:7545";
  // const SEPOLIA_NETWORK_ID = 11155111;
  const SEPOLIA_NETWORK_ID = 5777;
  const contractAddress = '0xe7EA242352622Ae8d05c16b992A93bac37E615a4';
  const abi = abiArtifact.abi;

  const sdk = new CoinbaseWalletSDK({
    appName: 'Smartnodes'
  });

  const connectToCoinbaseWallet = async () => {
    try {
      const coinbaseWallet = sdk.makeWeb3Provider(RPC_ENDPOINT, SEPOLIA_NETWORK_ID);
      const accounts = await coinbaseWallet.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(coinbaseWallet);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, abi, signer);
      setContract(contractInstance);
      setUserAddress(accounts[0]);
      setStatus('Coinbase Wallet connected successfully.');
      setError('');
      const balance = await contractInstance.balanceOf(accounts[0]);
      setUserBalance(ethers.utils.formatUnits(balance, 18));
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to Coinbase Wallet.');
      setError('Error connecting to Coinbase Wallet.');
    }
  };

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
          { title: "Users", amount: users, iconColor: "black", iconBg: "violet", icon: <MdOutlineSupervisorAccount/> },
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
      const response = await fetch(`http://127.0.0.1:5029/${endpoint}`);
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

  const getFlaskInfo = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5029/${endpoint}`);
      if (repsonse.ok) {
        const data = await response.json();
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  const toBytes32 = (text) => {
    return ethers.utils.formatBytes32String(text);
  };

  const requestJob = async (validatorIds) => {
    if (contract) {
      try {
        const tx = await contract.requestJob(validatorIds);
        await tx.wait();
        setStatus('Job requested successfully.');
      } catch (error) {
        console.error('Error requesting job:', error);
        setStatus('Error requesting job.');
      }
    } else {
      setStatus('Connect to the wallet first.');
    }
  };

  const createUser = async (input) => {
    if (contract) {
      try {
        const bytes32Input = toBytes32(input);
        const tx = await contract.createUser(bytes32Input);
        await tx.wait();
        setStatus('User created successfully.');
      } catch (error) {
        console.error('Error creating user:', error);
        setStatus('Error creating user.');
      }
    } else {
      setStatus('Connect to the wallet first.');
    }
  };

  // Fetch network stats when the component mounts or the contract updates
  useEffect(() => {
    if (contract) {
      getNetworkStats();
    }
  }, [contract]);

  return (
    <section className={`bg-slate-100 dark:bg-gray-900 xs:px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center pb-10
                          border-b border-b-black dark:border-b-white`}>
      <div className="w-full flex flex-col items-end mt-5 md:mt-10">
        <div className="flex space-x-4">
          <Button
            color="black"
            bgColor="lightGrey"
            text={contract ? "Connected" : "Connect Wallet"}
            borderRadius="10px"
            onClick={connectToContract}
          />
          <Button
            color="black"
            bgColor="lightGrey"
            text={contract ? "Connected to Base" : "Connect Coinbase"}
            borderRadius="10px"
            onClick={connectToCoinbaseWallet}
          />
        </div>
      </div>

      <div className="max-w-[1280px] items-center w-full flex-wrap">
        <h1 className={`${styles.heading} text-left sm:px-10 md:px-0 xs:px-0 mt-10 md:mt-0 max-w-[1280px] mb-5`}>
          Smartnodes Dashboard
        </h1>

        <div className="bg-slate-200 dark:bg-slate-800 dark:text-gray-200 rounded-xl max-w-[700px] p-3 xs:p-8 pt-7 m-3 overflow-x-scroll">
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

        <div className="bg-gray-200 max-w-[500px] dark:bg-slate-800 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-7 m-3">
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

        <div className="flex flex-wrap m-2 justify-start gap-1 items-center w-full">
          {networkStats.map((item, index) => (
            <div key={index} className="bg-slate-200 dark:bg-slate-800 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg min-w-[250px] max-w-[90%] sm:max-w-[45%] md:max-w-[30%] p-4 pt-7 rounded-2xl m-1">
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

        <div className="flex my-8 pt-2 flex-wrap justify-start max-w-[1280px] border-t border-t-black dark:border-t-white">          
          <div className="flex flex-wrap sm:m-3 pt-0 justify-start gap-1 items-center w-full">
            {dashboardOptions.map((item, index) => (
              <button 
                key={index} 
                onClick={async () => {
                  if (index === 0) {
                    const flaskRunning = await checkFlaskInstance(item.endpoint);
                    console.log(item.endpoint);
                    setActiveDashboard(item.component)
                  }
                }}
                disabled={index !== 0}
                className={`flex bg-gray-200 dark:bg-slate-600 h-[60px] dark:text-gray-200 dark:bg-secondary-dark-bg
                  max-w-[285px] min-w-[245px] p-3 sm:pt-1 mt-4 rounded-2xl mr-5 ${index === 0 
                  ? "dark:hover:border-white hover:border-black" : ""}`}
              >
                <div
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="flex text-3xl opacity-0.9 sm:p-2 border-gray-300">
                  <div className="text-[1.75rem] opacity-0.9 rounded-full p-[0.2rem] border border-gray-300">
                    {item.icon}
                  </div>
                  <p className="mt-[0.3rem] ml-3 text-lg font-bold text-gray-400">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {activeDashboard && (
          <div className="mt-10 w-full p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
            <div className="space-x-3">
              <Button
                color="black"
                bgColor="lightGrey"
                text="Create User"
                borderRadius="10px"
                onClick={createUser}
              />
              <Button
                color="black"
                bgColor="lightGrey"
                text="Create Job"
                borderRadius="10px"
                onClick={requestJob}
              />
              <input type="text"/>
              
            </div>
            {activeDashboard}
            {checkFlaskInstance && (
              <div/>
            )}
          </div>
        )}

        {/* <div className="flex flex-row bg-slate-500 mx-5 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <h2 className={`mt-3 text-center ${styles.landingText}`}>
              Validators
            </h2>

            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 7, 12] }]}
              series={[
                {
                  data: [0, 4.5, 2, 5.5, 3.5, 7],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className={`mt-3 text-center ${styles.landingText}`}>
              Users
            </h2>

            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 10, 14] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div> */}

      </div>
    </section>
  );
};
export default SmartnodesApp;