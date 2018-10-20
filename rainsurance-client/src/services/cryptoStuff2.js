export default () => {//toContractAddress, insurancePrice) => {

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


}