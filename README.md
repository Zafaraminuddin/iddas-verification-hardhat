# IDDAS Hardhat Project

A Hardhat-based Ethereum project for deploying and testing smart contracts on a local development blockchain.

---

## Table of Contents

- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Compile Contracts](#compile-contracts)  
- [Run Local Ethereum Node](#run-local-ethereum-node)  
- [Deploy Contracts](#deploy-contracts)  
- [Usage](#usage)  

---

## Prerequisites

- Node.js (v18+ recommended)  
- npm (comes with Node.js)  
- Git (optional, for cloning the repo)

---

## Installation

Clone the repository (if not already cloned):

```bash
git clone <repository-url>
cd iddas-hardhat
```

Install project dependencies:

```bash
npm install
```

## Compile Contracts

Compile all Solidity contracts using Hardhat:

```bash
npx hardhat compile
```

Compiled artifacts will be available in the artifacts/ folder.

## Run Local Ethereum Node

Start a local EVM for development and testing:

```bash
npx hardhat node
```

This spins up a local blockchain with pre-funded accounts.

Account 0 is the default deployer account.

Keep this terminal running while deploying and testing contracts.

## Deploy Contracts

Deploy contracts to the local Hardhat node:

```bash
npx hardhat run scripts/deploy.js --network localhost
```
Uses Account 0 by default as the deployer.

To deploy on a live network change the network parameter in above command and add the configurations for the specific network in the hardhat.config.js file.
Few networks configuration details are already added 2 testnets( sepolia, polygon-amoy) and 1 mainnet polygon. commands for each network:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
```bash
npx hardhat run scripts/deploy.js --network polygon_amoy
```
```bash
npx hardhat run scripts/deploy.js --network polygon_main
```

Deployed contract addresses and transaction logs will appear in the console.

## Scripts

To transfer ownership of the contract use the following command:
```bash
npx hardhat run scripts/transfer.js --network polygon_main
```
transfer.js file have 2 hardcoded variables ``` CONTRACT_ADDRESS ``` and ``` NEW_OWNER```, update these before running the command.
Make sure the network name specified is correct according to your use, the network name must match with what declared in the hardhat.config.js file.

## Usage

Interact with contracts using Hardhat console or scripts:

npx hardhat console --network localhost
