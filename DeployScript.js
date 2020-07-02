var simpleContract = eth.contract([{"constant":false,"inputs":[{"name":"_b","type":"uint256"}],"name":"set_b","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"get_a","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"uint256"}],"name":"set_a","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"get_b","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}])

personal.unlockAccount(eth.accounts[0])

var simple = simpleContract.new({
  from: eth.accounts[0],
  data: "0x6060604052341561000f57600080fd5b5b61014e8061001f6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063111550e41461005f57806348159181146100825780636d871c44146100ab578063f3d33cf4146100ce575b600080fd5b341561006a57600080fd5b61008060048080359060200190919050506100f7565b005b341561008d57600080fd5b610095610102565b6040518082815260200191505060405180910390f35b34156100b657600080fd5b6100cc600480803590602001909190505061010c565b005b34156100d957600080fd5b6100e1610117565b6040518082815260200191505060405180910390f35b806001819055505b50565b6000805490505b90565b806000819055505b50565b600060015490505b905600a165627a7a72305820e602ebb577474bb32f48feb64fe18bd1388e16b9422cf0e74428cc6693a831230029",
  gas: 500000
})