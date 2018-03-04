web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8101"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"option","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"option","type":"bytes32"}],"name":"validoption","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"optionList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"option","type":"bytes32"}],"name":"voteForoption","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"optionNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0xce2f70ebd3f35f27343d2ca527687cba34a7e594');
options = {"Strawberry": "option-1", "Jam": "option-2", "None": "option-3"}

function voteForOption(option) {
  optionName = $("#option").val();
  try {
    contractInstance.voteForoption(optionName, {from: web3.eth.accounts[0]}, function() {
      let div_id = options[optionName];
      $("#" + div_id).html(contractInstance.totalVotesFor.call(optionName).toString());
    });
  } catch (err) {
  }
}

$(document).ready(function() {
  optionNames = Object.keys(options);
  for (var i = 0; i < optionNames.length; i++) {
    let name = optionNames[i];
    let val = contractInstance.totalVotesFor.call(name).toString()
    $("#" + options[name]).html(val);
  }
});

