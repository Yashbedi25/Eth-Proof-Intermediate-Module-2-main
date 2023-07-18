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