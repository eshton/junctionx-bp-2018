exports.trustedWeatherAddress = '0x41A153E71C62b4CB918104EE0DFb9B29b30339CB';
exports.privateKey = '0xD4A9C8084E603E27DE7CF24E545E2DEC733D6B4A8F05696B61DB2D4301C24A56';
exports.bankAddress = '0xaeEb5e5e097394CFf0e9Bb88cb62EFAF4841Dcc3';
exports.mainContractAddress = '0xf698c75376c1aea47457e3f324ba92e502c953bd';
exports.mainContract = [
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
		"type": "function",
		"stateMutability": "view"
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
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": false,
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
		"name": "createRainsurence",
		"outputs": [],
		"payable": true,
		"type": "function",
		"stateMutability": "payable"
	},
	{
		"inputs": [],
		"payable": false,
		"type": "constructor",
		"stateMutability": "nonpayable"
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
		"type": "function",
		"stateMutability": "view"
	},
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
		"constant": false,
		"inputs": [],
		"name": "rollback",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
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
	}
];