import React, { useEffect, useState } from 'react';
import { MdOutlineSupervisorAccount, MdOutlineSettings, MdVerifiedUser, MdBusinessCenter, MdPerson } from 'react-icons/md';
import abiArtifact from "../assets/SmartnodesCore.json";
import multisigAbiArtifact from '../assets/SmartnodesMultiSig.json';
import styles, { layout } from "../style";
import { Button, TensorlinkDashboard, SmartnodesDashboard, SupplyStatsCard, ConnectWalletButton } from "../components";
import { ethers } from 'ethers';
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { PieChart } from "@mui/x-charts/PieChart";


const SmartnodesApp = () => {
  function round(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }

  const [activeDashboard, setActiveDashboard] = useState(null);
  const [status, setStatus] = useState('-');
  const [contract, setContract] = useState(null);
  const [multisig, setMultisig] = useState(null);
  const [userAddress, setUserAddress] = useState('-');
  const [userBalance, setUserBalance] = useState("-");
  const [userLocked, setUserLocked] = useState("-");
  const [userUnclaimed, setUserUnclaimed] = useState("-");
  const [error, setError] = useState(''); // State for error message
  const [networkStats, setNetworkStats] = useState([
    { title: "Jobs Completed", amount: "-", iconColor: "black", iconBg: "red", icon: <MdBusinessCenter /> },
    { title: "Active Validators", amount: "-", iconColor: "black", iconBg: "lightBlue", icon: <MdVerifiedUser/> },
    { title: "Active Workers", amount: "-", iconColor: "black", iconBg: "grey", icon: <MdOutlineSettings/> },
    { title: "Users", amount: "-", iconColor: "black", iconBg: "violet", icon: <MdOutlineSupervisorAccount/> },
  ]);
  const [supplyStats, setSupplyStats] = useState([
    { title: "Total Supply", amount: "-" },
    { title: "Locked", amount: "-" },
    { title: "Unclaimed Rewards", amount: "-" },
    { title: "State Reward", amount: "-" },
    { title: "State Time (s)", amount: "-" }
  ]);

  const dashboardOptions = [
    { title: "Tensorlink Dashboard", icon: <MdPerson style={{ color: "violet" }}/>, endpoint: "node", component: <TensorlinkDashboard /> },
    // { title: "Validator Dashboard", icon: <MdWebhook style={{ color: "lightPink" }}/>, endpoint: "/api/validator" },
    // { title: "Worker Dashboard", icon: <MdOutlineHub style={{ color: "lightBlue" }}/>, endpoint: "/api/worker" }
  ];

  // const RPC_ENDPOINT = "https://sepolia.base.org";
  const RPC_ENDPOINT = "http://127.0.0.1:7545"
  // const BASE_NETWORK_ID = 84532;
  const BASE_NETWORK_ID = 5777;
  const contractAddress = '0x64eC74C9370F684783cBf606eEDdd4Ba7fDFc338';
  const multisigAddress = '0x63592eA5012A660308A82b4cCDcA05f5C4d357Fa';
  const abi = abiArtifact.abi;
  const multisigAbi = multisigAbiArtifact.abi;

  const sdk = new CoinbaseWalletSDK({
    appName: 'Smartnodes'
  });

  const connectToCoinbaseWallet = async () => {
    try {
      const coinbaseWallet = sdk.makeWeb3Provider(RPC_ENDPOINT, BASE_NETWORK_ID);
      const accounts = await coinbaseWallet.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(coinbaseWallet);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, abi, signer);
      const multisigContractInstance = new ethers.Contract(multisigAddress, multisigAbi, signer);
      setContract(contractInstance);
      setMultisig(multisigContractInstance);
      setUserAddress(accounts[0]);
      setStatus('Coinbase Wallet connected successfully.');
      setError('');
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to Coinbase Wallet.');
      setError('Error connecting to Coinbase Wallet.');
    }
  };

  const connectToContract = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Create provider and signer using ethers v6 syntax
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        
        // Create contract instances after getting signer
        const contractInstance = new ethers.Contract(
          contractAddress,
          abi,
          signer  // Pass signer directly here
        );
        
        const multisigContractInstance = new ethers.Contract(
          multisigAddress,
          multisigAbi,
          signer  // Pass signer directly here
        );
  
        console.log("Contract provider:", contractInstance.runner?.provider);
        console.log("Contract signer:", contractInstance.runner);
        console.log("MSContract provider:", multisigContractInstance.runner?.provider);
        console.log("MSContract signer:", multisigContractInstance.runner);
        
        setContract(contractInstance);
        setMultisig(multisigContractInstance);
        setUserAddress(accounts[0]);
        setStatus('Wallet connected successfully.');
        setError('');
      } catch (error) {
        console.error(error);
        setStatus('Error connecting to wallet.');
      }
    } else {
      setStatus('MetaMask is not installed.');
    }
  };

  // Add this function to the SmartnodesApp component
  const claimRewards = async () => {
    if (!contract) {
      setStatus('Connect to the wallet first.');
      return;
    }
    
    try {
      // Check if we need to reconnect the signer
      const provider = contract.runner?.provider;
      const signer = await provider.getSigner();
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.claimRewards();
      await tx.wait();

      setStatus('Rewards claimed successfully!');
      
      // Refresh the user's balance and unclaimed rewards
      getNetworkStats();
    } catch (error) {
      console.error('Error claiming rewards:', error);
      setStatus('Error claiming rewards: ' + error.message);
    }
  };
  
  // Function to fetch network stats from the smart contract
  const getNetworkStats = async () => {
    if (contract) {
      try {
        // Fetch values from contract
        let result = await contract.getSupply();
        let [supply, locked, unclaimed] = result.map(val => BigInt(val));
        let emissionRate = await contract.emissionRate();
        let totalJobs = (await contract.jobCounter()) - BigInt(1); // Subtract using BigInt
        let activeValidators = await contract.getActiveValidatorCount();
        let users = await contract.userCounter();
  
        // Function to round numbers to 2 decimal places
        const round = (num, decimals = 2) => Number(num.toFixed(decimals));
  
        // Convert to regular numbers and round
        supply = round(Number(ethers.formatUnits(supply, 18)));
        locked = round(Number(ethers.formatUnits(locked, 18)));
        unclaimed = round(Number(ethers.formatUnits(unclaimed, 18)));
  
        totalJobs = ethers.formatUnits(totalJobs, 0); // No decimals needed for job count
        activeValidators = ethers.formatUnits(activeValidators, 0); // No decimals needed for validator count
        users = ethers.formatUnits(users, 0); // No decimals needed for user count
        emissionRate = round(Number(ethers.formatUnits(emissionRate, 18)), 2);
  
        // Fetch the most recent 'StateUpdate' event
        const provider = contract.runner?.provider;
        const currentBlock = await provider.getBlockNumber();
        const events = await contract.queryFilter("StateUpdate", currentBlock - 200, currentBlock); // Fetch events from the last block
  
        let mostRecentStateUpdate = events[events.length - 1]; // Get the most recent event
        const stateUpdateData = {
          networkCapacities: [0],
          networkWorkers: [0],
        };  

        // Extract relevant data from the most recent event
        try {
          const stateUpdateData = {
            networkCapacities: mostRecentStateUpdate.args.networkCapacities.map(capacity => Number(capacity)),
            networkWorkers: mostRecentStateUpdate.args.networkWorkers.map(workers => Number(workers)),
          };  
        } catch (error) {
          console.log(error);
        }
        
        // Set network stats and supply stats based on contract data
        setNetworkStats([
          { title: "Jobs Completed", amount: totalJobs, iconColor: "black", iconBg: "red", icon: <MdBusinessCenter /> },
          { title: "Active Validators", amount: activeValidators, iconColor: "black", iconBg: "lightBlue", icon: <MdVerifiedUser /> },
          { title: "Active Workers", amount: stateUpdateData.networkWorkers[0], iconColor: "black", iconBg: "grey", icon: <MdOutlineSettings /> },
          { title: "Users", amount: "-", iconColor: "black", iconBg: "violet", icon: <MdOutlineSupervisorAccount /> },
        ]);
  
        setSupplyStats([
          { title: "Total Supply", amount: supply + unclaimed },
          { title: "Circulating Supply", amount: supply - locked },
          { title: "Locked", amount: locked },
          { title: "Unclaimed Rewards", amount: unclaimed },
          { title: "State Reward", amount: emissionRate },
          { title: "State Time (mins)", amount: 60 },
        ]);
        
        let userBalance = await contract.balanceOf(userAddress);
        let userUnclaimed = await contract.getUnclaimedRewards(userAddress);
        let userLocked = await contract.getLockedBalance(userAddress);
        
        setUserBalance(Number(ethers.formatUnits(userBalance, 18)).toFixed(2));
        setUserUnclaimed(Number(ethers.formatUnits(userUnclaimed, 18)).toFixed(1));
        setUserLocked(Number(ethers.formatUnits(userLocked, 18)).toFixed(1));
  
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
  
  // Fetch network stats when the component mounts or the contract updates
  useEffect(() => {
    if (contract) {
      getNetworkStats();
    }
  }, [contract]);

  return (
    <section className={`bg-slate-100 dark:bg-gray-900 xs:px-5 md:px-10 px-10 flex flex-col border-t dark:border-t-white border-t-black items-center pb-10
                          border-b border-b-black dark:border-b-white xs:-ml-5 sm:-ml-0 -ml-10 xs:-mr-0 -mr-4`}>
        <div className="text-red-500 text-middle bg-gray-300 w-screen text-center md:-mr-0 -mr-5 border border-b-gray-700">
          {userAddress === '-' ? (
            <p className="p-2 underline text-lg">
              Connect Web Wallet to Access Dashboard
            </p>
          ) : (
            <div></div>
          )}
        </div>
      <div className="w-full flex flex-col items-end mt-5 md:mt-10">
        <div className="flex space-x-4">
        <ConnectWalletButton 
          connectToContract={connectToContract} 
          connectToCoinbaseWallet={connectToCoinbaseWallet} 
          contract={contract} 
        />

        </div>
      </div>

      <div className="max-w-[1280px] items-center w-full flex-wrap">
        <h1 className={`${styles.subheading} text-left xs:ml-4 sm:ml-0 px-3 xs:px-0 mt-10 md:mt-0 max-w-[1280px] mb-5`}>
          Smartnodes <span className="font-normal text-gray-400">(testnet)</span> Dashboard
        </h1>

        <div className="bg-slate-200 dark:bg-slate-800 xs:-mr-0 -mr-5 dark:text-gray-200 rounded-xl max-w-[700px] p-4 xs:p-8 pt-7 m-3 mb-4 overflow-x-scroll mt-5 border border-gray-600">
          <div className="mb-5 px-1 mt-2 xs:mt-3">
            <h2 className={`font-bold text-xl text-gray-400`}>Account</h2>
            <p className="text-lg xs:text-2xl overflow-auto font-semibold">{userAddress ? userAddress : "No address connected"}</p>
          </div>  
          <div className="flex flex-wrap px-1 mb-3">
            <div className="mt-1 pr-20">
              <p className="font-bold text-xl text-gray-400">Balance</p>
              <p className="text-xl xs:text-2xl">
                {(isNaN(Number(userBalance)) ? '-' : Number(userBalance).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 }))}
              </p>
            </div>  
            <div className="pr-20 mt-1">
              <p className="font-bold text-xl text-gray-400">Locked</p>
              <p className="text-xl xs:text-2xl">
                {(isNaN(Number(userLocked)) ? '-' : Number(userLocked).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 }))}
              </p>
            </div>  
            <div className="pr-5 mt-1">
              <p className="font-bold text-xl text-gray-400">Unclaimed Rewards</p>
              <p className="text-xl xs:text-2xl">
                {(isNaN(Number(userUnclaimed)) ? '-' : Number(userUnclaimed).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 }))}
              </p>
            </div>  
            <a
              onClick={claimRewards}
              className="mt-7 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm md:text-base font-semibold cursor-pointer"
            >
              Claim Rewards
            </a>
          </div>
        </div>
        
        <SupplyStatsCard supplyStats={supplyStats}/>
    
        <div className="flex flex-wrap m-2 justify-start gap-1 items-center w-full">
          {networkStats.map((item, index) => (
            <div key={index} className="flex flex-row bg-slate-200 dark:bg-slate-800 h-30 dark:text-gray-200 dark:bg-secondary-dark-bg min-w-[245px] max-w-[90%] p-4 pt-7 rounded-2xl m-1 border border-gray-600">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-3xl opacity-0.9 rounded-full max-h-[55px] p-3 border border-gray-300 hover:drop-shadow-xl xs:-ml-0 -ml-0"
              >
                {item.icon}
              </button>
              <div className="xs:ml-5 ml-1 my-1">
                <p>
                  <span className="text-2xl font-semibold">{item.amount}</span>
                </p>
                <p className="text-md text-gray-400 mt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex my-8 pt-2 flex-wrap justify-start max-w-[1280px] border-t border-t-black dark:border-t-white">   
          <h1 className={`${styles.subheading} text-left sm:px-10 md:px-0 xs:px-0 mt-10 max-w-[1280px]`}>
            Networks
          </h1>    
        </div>

        <SmartnodesDashboard contract={contract} multisig={multisig}/>
        
        {/* <TensorlinkDashboard /> */}
          {/* <div className="flex flex-wrap sm:m-3 pt-0 justify-start gap-1 items-center w-full">
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
          </div> */}
        {/* {activeDashboard && (
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
        )} */}
      </div>
    </section>
  );
};
export default SmartnodesApp;