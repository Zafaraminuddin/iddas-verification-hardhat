const { ethers } = require("ethers");

const RPC_URL = "https://polygon.drpc.org";

const WALLET =
    "0x3B687248e568f96FFA9c9aDE35eDcF0a181B72A9";

async function main() {
    const provider = new ethers.JsonRpcProvider(RPC_URL);

    const network = await provider.getNetwork();
    const balance = await provider.getBalance(WALLET);

    console.log("=================================");
    console.log("Polygon Mainnet");
    console.log("=================================");
    console.log("Chain ID:", network.chainId.toString());
    console.log("Address:", WALLET);
    console.log("POL:", ethers.formatEther(balance));
    console.log("=================================");
}

main().catch(console.error);