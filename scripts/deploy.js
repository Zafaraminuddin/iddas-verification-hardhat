const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const AnchorRegistry = await hre.ethers.getContractFactory("AnchorRegistry");

  const registry = await AnchorRegistry.deploy(deployer.address);
  await registry.waitForDeployment();

  console.log("AnchorRegistry deployed to:", await registry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
