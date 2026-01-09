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

Deployed contract addresses and transaction logs will appear in the console.

## Usage

Interact with contracts using Hardhat console or scripts:

npx hardhat console --network localhost
