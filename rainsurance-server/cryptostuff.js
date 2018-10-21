exports.trustedWeatherAddress = '0x7eacB01195De3A7D6747958473110D182720e018';
exports.bankPrivateKey = '0xcbdabc28ba40d4d4a528e0789b2bfba5a6ba334f4f06c88330440530cb4da4e3';
exports.weatherPrivateKey = '0xa6bfb0863b2413ba132ad72405ebf2ec45fcb578d8a641109414c5d8ceaff32d';
exports.bankAddress = '0xa8898a92A797788d1a889d6f27dB016e30a90C29';
exports.mainContractAddress = '0x98de3985d31326085d02a1162801828a4052ab31';
exports.mainContract = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "poll_id",
				"type": "string"
			},
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
		"name": "createRainsurence",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "pollid",
				"type": "string"
			}
		],
		"name": "getAddressForPollId",
		"outputs": [
			{
				"name": "id",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDiagnosesCount",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "insurances",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
exports.rainsuranceContract = [
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "receiveMoneyFromCustomer",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "rollback",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "nonpayable",
		"type": "function"
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
		"stateMutability": "view",
		"type": "function"
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
		"stateMutability": "payable",
		"type": "constructor"
	}
];