import React, { useEffect, useState } from 'react';
import { MdOutlineSupervisorAccount, MdOutlineSettings, MdVerifiedUser, MdBusinessCenter } from 'react-icons/md';
import abiArtifact from "../assets/SmartnodesCore.json";
import styles, { layout } from "../style";
import { Button } from "../components";
import { ethers } from 'ethers';
import { active } from 'd3';

const SmartnodesApp = () => {
  const [status, setStatus] = useState('');
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState('');
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

  const RPC_ENDPOINT = "https://sepolia.infura.io/v3/4bb158409bfe45d49cea535f20975671";
  const SEPOLIA_NETWORK_ID = 11155111;
  const contractAddress = '0x9bB0F97B356EBdB4a0Ac614b9d7f0102D54973BC';
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
        // setUserError('');
        // setJobError('');
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
        let activeValidators = await contract.getValidatorCount();
        let users = await contract.getUserCount();

        supply = ethers.formatUnits(supply, 18);
        totalJobs = ethers.formatUnits(totalJobs, 0);
        activeValidators = ethers.formatUnits(activeValidators, 0);
        users = ethers.formatUnits(users, 0);
        emissionRate = ethers.formatUnits(emissionRate, 18) * 52560 / 21_000_000;
        emissionRate = Math.round(emissionRate * 100, 3);
        
        setNetworkStats([
          { title: "Users", amount: users, iconColor: "black", iconBg: "purple", icon: <MdOutlineSupervisorAccount/> },
          { title: "Jobs Completed", amount: totalJobs, iconColor: "black", iconBg: "red", icon: <MdBusinessCenter /> },
          { title: "Active Validators", amount: activeValidators, iconColor: "black", iconBg: "lightBlue", icon: <MdVerifiedUser/> },
          { title: "Active Workers", amount: activeValidators, iconColor: "black", iconBg: "grey", icon: <MdOutlineSettings/> },
        ]);
        setSupplyStats([
          { title: "Total Value Locked", amount: supply * 0.0005 },
          { title: "Current Supply", amount: supply },
          { title: "Current Inflation", amount: emissionRate  },
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

  // Fetch network stats when the component mounts or the contract updates
  useEffect(() => {
    if (contract) {
      getNetworkStats();
    }
  }, [contract]);

  return (
    <section className="bg-slate-50 dark:bg-gray-900 px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center pb-10">
      <h1 className={`${styles.subheading} text-left px-20 xs:px-0 mt-10 max-w-[1280px]`}>
          Network Info
      </h1>

      <div className="flex mt-8 flex-wrap justify-start">
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
          <Button
            color="black"
            bgColor="lightGrey"
            text={contract ? "Connected" : "Connect Wallet"}
            borderRadius="10px"
            onClick={connectToContract}
          />          
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

      <div className="mt-10 bg-slate-50 dark:bg-gray-900 px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
        <div className="text-left px-20 xs:px-0 mt-20 max-w-[1280px] justify-center items-center">
          <h1 className={`${styles.subheading}`}>
            Overview of TensorLink
          </h1>
        </div>
      </div>
    </section>
  );
};
export default SmartnodesApp;
