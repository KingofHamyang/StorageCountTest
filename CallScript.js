personal.unlockAccount(eth.accounts[0])

eth.defaultAccount = eth.accounts[0]

var ct = web3.eth.contract([{"constant":false,"inputs":[{"name":"_b","type":"uint256"}],"name":"set_b","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"get_a","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"uint256"}],"name":"set_a","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"get_b","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}]);
var simple = ct.at("0x6f372568c75b513a525cc4c2fc6cc8073e424039");

