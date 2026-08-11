const { ethers } = require("hardhat");

async function main() {
const CONTRACT_ADDRESS = "0x8DFcAAc9EDF8e0b64342348eF98eA8805cE2fc44";
const NEW_OWNER = "0xf667b0d067b717e503207EB54667c6521d35b435";

    const [signer] = await ethers.getSigners();

    console.log("Signer:", signer.address);

    const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        [
            "function owner() view returns (address)",
            "function transferOwnership(address newOwner)"
        ],
        signer
    );

    const currentOwner = await contract.owner();

    console.log("Current owner:", currentOwner);
    console.log("New owner:", NEW_OWNER);

    if (currentOwner.toLowerCase() !== signer.address.toLowerCase()) {
        throw new Error("This wallet is not the current owner!");
    }

    console.log("Transferring ownership...");

    const tx = await contract.transferOwnership(NEW_OWNER);

    console.log("Transaction:", tx.hash);

    await tx.wait();

    console.log("Ownership transferred!");
    console.log("New owner:", await contract.owner());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});