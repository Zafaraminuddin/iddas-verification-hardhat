const { ethers } = require("hardhat");

async function main() {
    // Address that will become the owner of the contract
    const initialOwner = "0x3B687248e568f96FFA9c9aDE35eDcF0a181B72A9";

    console.log("Deploying AnchorRegistry...");
    console.log("Owner:", initialOwner);

    const AnchorRegistry = await ethers.getContractFactory("AnchorRegistry");

    const anchorRegistry = await AnchorRegistry.deploy(initialOwner);

    // Wait until deployment is mined
    await anchorRegistry.waitForDeployment();

    console.log("--------------------------------");
    console.log("AnchorRegistry deployed!");
    console.log("Contract Address:", await anchorRegistry.getAddress());
    console.log("Owner:", await anchorRegistry.owner());
    console.log("--------------------------------");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});