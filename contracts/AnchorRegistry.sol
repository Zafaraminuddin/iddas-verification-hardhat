// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title IDDAS Anchor Registry
 * @dev Implements a secure, gas-efficient registry for appending Merkle Roots.
 * Uses OpenZeppelin Ownable for strict access control.
 */
contract AnchorRegistry is Ownable {
    // Event emitted when a batch is successfully anchored.
    // Indexed 'batchId' allows for fast lookups/filtering by ID.
    event Anchor(
        uint256 indexed batchId,
        bytes32 merkleRoot,
        string ruleVersion
    );

    /**
     * @dev Constructor sets the deployer as the initial owner.
     * @param initialOwner The address that will have permission to write anchors.
     */
    constructor(address initialOwner) Ownable(initialOwner) {}

    /**
     * @dev Commits a batch Merkle Root to the blockchain.
     * @param _batchId The unique numeric ID of the batch (hashed UUID).
     * @param _merkleRoot The calculated Merkle Root of the activations.
     * @param _ruleVersion The rule version string (e.g., "v1.0") for binding.
     * * Requirements:
     * - Only the contract owner can call this function.
     */
    function commitBatch(
        uint256 _batchId,
        bytes32 _merkleRoot,
        string memory _ruleVersion
    ) public onlyOwner {
        emit Anchor(_batchId, _merkleRoot, _ruleVersion);
    }
}
