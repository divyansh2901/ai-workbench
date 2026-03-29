// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MeetingStore{
    bytes32[] public hashes;
    
    function storeHash(bytes32 hash) public{
        hashes.push(hash);
    }

    function getHashes() public view returns(bytes32[] memory){
        return hashes;
    }
}