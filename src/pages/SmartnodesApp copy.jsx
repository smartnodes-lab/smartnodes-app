import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const SmartnodesApp = () => {
  const [publicKeyHash, setPublicKeyHash] = useState('');
  const [jobOwner, setJobOwner] = useState('');
  const [jobCapacity, setJobCapacity] = useState('');
  const [status, setStatus] = useState('');
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [error, setError] = useState(''); // State for error message
  const [userError, setUserError] = useState(''); // State for create user error message
  const [jobError, setJobError] = useState(''); // State for create job error message

  const contractAddress = 'YOUR_CONTRACT_ADDRESS';
  const abi = [
    // Add your contract's ABI here
  ];

  // Function to connect to the user's MetaMask wallet
  const connectToContract = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const provider = new ethers.providers.Web3Provider(window.ethereum, chainId);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        setContract(contractInstance);
        setUserAddress(accounts[0]); // Save the connected user's address
        setStatus('Wallet connected successfully.');
        setError('');
        setUserError('');
        setJobError('');
      } catch (error) {
        console.error(error);
        setStatus('Error connecting to wallet.');
      }
    } else {
      setStatus('MetaMask is not installed.');
    }
  };

  async function signMessage(message) {
    try {
      const accounts = await web3.eth.getAccounts();
      const fromAddress = accounts[0];
      const signature = await web3.eth.personal.sign(message, fromAddress, '');
      console.log('Signature:', signature);
      return signature;
    } catch (error) {
        console.error('Error signing message:', error);
        return null;
    }
  }

  // Function to create a user by interacting with the smart contract
  const createUser = async () => {
    if (contract) {
      try {
        const tx = await contract.createUser(publicKeyHash);
        await tx.wait();
        setStatus('User created successfully!');
        setUserError('');
      } catch (error) {
        console.error(error);
        setUserError('Error creating user.');
      }
    } else {
      setUserError('Connect to the wallet first.');
    }
  };

  // Function to create a job by interacting with the smart contract
  const createJob = async () => {
    if (contract) {
      try {
        const tx = await contract.createJob(jobOwner, jobCapacity);
        await tx.wait();
        setStatus('Job created successfully!');
        setJobError('');
      } catch (error) {
        console.error(error);
        setJobError('Error creating job.');
      }
    } else {
      setJobError('Connect to the wallet first.');
    }
  };

  // Function to fetch data from the Flask backend
  const fetchFromTensorlink = () => {
    fetch('http://127.0.0.1:5000/get_public_key_hash')
      .then(response => response.json())
      .then(data => {
        setPublicKeyHash(data.public_key_hash);
        setError(''); // Clear error message on successful fetch
        // Fetch job owner and capacity from another endpoint if needed
        // Example:
        // setJobOwner(data.job_owner);
        // setJobCapacity(data.job_capacity);
      })
      .catch(error => {
        console.error('Error fetching public key hash:', error);
        setError('Error fetching public key hash from Tensorlink Flask instance.'); // Set error message on failure
      });
  };

  return (
    <section className="bg-slate-50 dark:bg-gray-900 px-5 md:px-10 flex flex-col border-t dark:border-t-white border-t-black items-center">
      <h1 className="text-3xl font-bold mb-4">Smartnodes</h1>
      <button onClick={connectToContract} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Connect Wallet
      </button>
      {userAddress && <p>Connected as: {userAddress}</p>}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Create User</h2>
        <input
          type="text"
          value={publicKeyHash}
          onChange={(e) => setPublicKeyHash(e.target.value)}
          placeholder="Public Key Hash"
          className="mb-2 px-4 py-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}
        {userError && <p className="text-red-500">{userError}</p>} {/* Display user creation error message if any */}
        <button onClick={createUser} className="px-4 py-2 bg-green-500 text-white rounded">
          Create User
        </button>
        <button onClick={fetchFromTensorlink} className="mt-2 px-4 py-2 bg-gray-500 text-white rounded">
          Import from Tensorlink
        </button>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Create Job</h2>
        <input
          type="text"
          value={jobOwner}
          onChange={(e) => setJobOwner(e.target.value)}
          placeholder="Job Owner Address"
          className="mb-2 px-4 py-2 border rounded"
        />
        <input
          type="text"
          value={jobCapacity}
          onChange={(e) => setJobCapacity(e.target.value)}
          placeholder="Job Capacity"
          className="mb-2 px-4 py-2 border rounded"
        />
        {jobError && <p className="text-red-500">{jobError}</p>} {/* Display job creation error message if any */}
        <button onClick={createJob} className="px-4 py-2 bg-green-500 text-white rounded">
          Create Job
        </button>
      </div>
      {status && <p className="text-lg mt-4">{status}</p>}
    </section>
  );
};

export default SmartnodesApp;
