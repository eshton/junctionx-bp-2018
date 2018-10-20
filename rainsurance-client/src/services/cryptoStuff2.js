import Web3 from 'web3';

export default () => {//toContractAddress, insurancePrice) => {
	const my_private_key = "0x3C6A887EB2D2B01852A0C09566738A02F6F2DABDD62B0D972D2B2FE6417141B0"
	const contractAddress = "0x0809603a5a77ea8d325ded23adbee558065635f8ac27e6d2a3afec8e7ddc659e"; //toContractAddress;
	const price = 500;//insurancePrice;
	const myAddress = '0xe86A9E3Bf11aD57E8cADcE910C1A4865B5793545';
	const gas = 3000000;
	const contractJson = [
		{
			"constant": false,
			"inputs": [],
			"name": "receiveMoneyFromCustomer",
			"outputs": [],
			"payable": true,
			"type": "function",
			"stateMutability": "payable"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "rollback",
			"outputs": [],
			"payable": false,
			"type": "function",
			"stateMutability": "nonpayable"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "rain_mm",
					"type": "uint256"
				}
			],
			"name": "updateRain",
			"outputs": [],
			"payable": false,
			"type": "function",
			"stateMutability": "nonpayable"
		},
		{
			"inputs": [
				{
					"name": "customer_address",
					"type": "address"
				},
				{
					"name": "trusted_weather_address",
					"type": "address"
				},
				{
					"name": "customer_required",
					"type": "uint256"
				},
				{
					"name": "rain_mm",
					"type": "uint256"
				},
				{
					"name": "city_name",
					"type": "string"
				},
				{
					"name": "end_ts",
					"type": "uint256"
				}
			],
			"payable": true,
			"type": "constructor",
			"stateMutability": "payable"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "bank",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "city",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "customer",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "customer_required_amount",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "end_timestamp",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "money_bank",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "money_customer",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "rain_mm_threshold",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "startTime",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "trusted_weather_source",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"type": "function",
			"stateMutability": "view"
		}
	];

	//var Web3 = require('web3');

	var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
	web3.eth.accounts.wallet.add(my_private_key);

	contract.methods.receiveMoneyFromCustomer().send({ 
	  		from: myAddress, 
	  		gas: gas, 
	  		value: web3.utils.toWei(price + ".0", "finney")
	  	},function(error, result) {
	        if(result == null) {
	        	console.log(error);
	        } else {
	        	console.log(result);
	        }
    	});
}