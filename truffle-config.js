require("./secrets.js")
const HDWallet = require('truffle-hdwallet-provider');
module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",     
			port: 8545,            
			network_id: "*",       
		},
		rinkeby: {
			provider: function () {
				return new HDWallet("minute hunt topic auto negative obey hello quantum empty license thunder have",
				"https://rinkeby.infura.io/v3/c216e74355924a518e5d0d183e67b23c",
				)
			},
			network_id: '4',
			gas: 4500000,
			gasPrice: 10000000000,
		}
	},
	compilers: {
		solc: {
			version: "0.6.12",    
		}
	}
}
