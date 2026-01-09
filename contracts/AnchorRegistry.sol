// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AnchorRegistry is Ownable {
    event Anchor(
        uint256 indexed batchId,
        bytes32 merkleRoot,
        string ruleVersion
    );

    constructor(address initialOwner) Ownable(initialOwner) {}

    function commitBatch(
        uint256 _batchId,
        bytes32 _merkleRoot,
        string memory _ruleVersion
    ) public onlyOwner {
        emit Anchor(_batchId, _merkleRoot, _ruleVersion);
    }
}
