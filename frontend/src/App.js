import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import SavingsAccount from "./contracts/SavingsAccount.sol/SavingsAccount.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Contract ABI (Application Binary Interface)
const contractABI = SavingsAccount.abi;

function App() {
  const [contract, setContract] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function connectToContract() {
      // Check if Ethereum provider is available
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.enable(); // Request user permission to connect
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Create a contract instance
        const savingsAccount = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setContract(savingsAccount);
        setWallet(signer);
      } else {
        console.log("Ethereum provider not detected");
      }
    }

    connectToContract();
  }, []);

  useEffect(() => {
    async function fetchBalance() {
      if (contract) {
        const accountBalance = await contract.displayBalance();
        setBalance(accountBalance.toString());
      }
    }

    fetchBalance();
  }, [contract, wallet]);

  const handleDeposit = async (amount) => {
    if (contract) {
      try {
        const tx = await contract.transferToSavings(amount);
        await tx.wait();
        const accountBalance = await contract.displayBalance();
        setBalance(accountBalance.toString());
        console.log("Deposit successful");
      } catch (error) {
        console.log("Deposit failed:", error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Savings Account</h1>
      <p>Contract Balance: {balance}</p>
      <button onClick={() => handleDeposit(100)}>Deposit 100 ETH</button>
    </div>
  );
}

export default App;
