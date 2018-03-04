pragma solidity ^0.4.18; //We have to specify what version of compiler this code will use

contract Voting {
  /* mapping is equivalent to an associate array or hash
  The key of the mapping is option name stored as type bytes32 and value is
  an unsigned integer which used to store the vote count
  */
  mapping (bytes32 => uint8) public votesReceived;
  
  /* Solidity doesn't let you create an array of strings yet. We will use an array of bytes32 instead to store
  the list of options
  */
  
  bytes32[] public optionList;

  // Initialize all the contestants
  function Voting(bytes32[] optionNames) public {
    optionList = optionNames;
  }

  function totalVotesFor(bytes32 option) view public returns (uint8) {
    require(validoption(option));
    return votesReceived[option];
  }

  function voteForoption(bytes32 option) public {
    require(validoption(option));
    votesReceived[option] += 1;
  }

  function validoption(bytes32 option) view public returns (bool) {
    for(uint i = 0; i < optionList.length; i++) {
      if (optionList[i] == option) {
        return true;
      }
    }
    return false;
  }
}

