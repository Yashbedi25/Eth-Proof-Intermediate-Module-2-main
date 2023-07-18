# SavingsAccount DApp

This project is a decentralized application (DApp) that interacts with the SavingsAccount smart contract. The DApp will display the token which will sav in saving account .

## Description

The SavingsAccount by me to save some token in the saving account for future usage. I use hardhat and reatjs for the project. It consists of the smart contract written in solidity where it display the saving account balance and tranfer the token to saving account. It also contain React Frontend which display on "http://localhost:3000/".Both the smart contract and Frontend succesfully run Dapp . 

## Getting Started

### Installing

To download the project, you can clone the repository using the following command:

```
git clone https://github.com/Yashbedi25/Module2_Project.git
```

After cloning the repository, navigate to the project's root directory.

### Executing program

To run the DApp, follow these steps:

1. Install the project dependencies by running the following command:

   ```
   npm install
   ```
2. Start a blockchain locally by running the command: 
   ```
   npx hardhat node
   ```

3. Deploy the SavingsAccount smart contract by running the deployment script:

   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```

   ```
4. Start the React development server:

   ```
   npm start
   ```

   The DApp will be accessible in your web browser at `http://localhost:3000`.
   The frontend will be displayed and you can transact token in the saving Account(i.e either deposit or withdraw)

   
```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SavingsAccount {
    address public owner;
    uint public balance;

    constructor() {
        owner = msg.sender;
    }

    function displayBalance() public view returns (uint) {
        return balance;
    }

    function transferToSavings(uint amount) public {
        require(amount > 0, "Amount must be greater than zero");
        require(balance + amount >= balance, "Overflow detected");

        balance += amount;
    }
}
```
## Authors

Yash Bedi 
[@YashBedi_25](https://twitter.com/Yash_Bedi25)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
