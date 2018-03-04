var optionNames = ['Strawberry', 'Jam', 'None'] ;
var votingContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"option","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"optionList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"option","type":"bytes32"}],"name":"validoption","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"option","type":"bytes32"}],"name":"voteForoption","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"optionNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var voting = votingContract.new(
   optionNames,
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b6040516103da3803806103da833981016040528080518201919050508060019080519060200190610041929190610048565b50506100c0565b82805482825590600052602060002090810192821561008a579160200282015b82811115610089578251829060001916905591602001919060010190610068565b5b509050610097919061009b565b5090565b6100bd91905b808211156100b95760008160009055506001016100a1565b5090565b90565b61030b806100cf6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610072578063573489a9146100b35780635fb82a25146100f25780637021939f14610131578063db538ef014610172575b600080fd5b341561007d57600080fd5b610097600480803560001916906020019091905050610199565b604051808260ff1660ff16815260200191505060405180910390f35b34156100be57600080fd5b6100d460048080359060200190919050506101de565b60405180826000191660001916815260200191505060405180910390f35b34156100fd57600080fd5b610117600480803560001916906020019091905050610202565b604051808215151515815260200191505060405180910390f35b341561013c57600080fd5b610156600480803560001916906020019091905050610262565b604051808260ff1660ff16815260200191505060405180910390f35b341561017d57600080fd5b610197600480803560001916906020019091905050610282565b005b60006101a482610202565b15156101af57600080fd5b600080836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b6001818154811015156101ed57fe5b90600052602060002090016000915090505481565b600080600090505b60018054905081101561025757826000191660018281548110151561022b57fe5b90600052602060002090015460001916141561024a576001915061025c565b808060010191505061020a565b600091505b50919050565b60006020528060005260406000206000915054906101000a900460ff1681565b61028b81610202565b151561029657600080fd5b6001600080836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff160217905550505600a165627a7a723058204af287847ca3ca19c1b8417917f56aa5a7a5685f9297e10924c6bf418dcff4c40029', 
     gas: '2000000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })