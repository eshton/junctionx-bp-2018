

const my_private_key = "0xD4A9C8084E603E27DE7CF24E545E2DEC733D6B4A8F05696B61DB2D4301C24A56"
const contractAddress = '0xf698c75376c1aea47457e3f324ba92e502c953bd';
const bankAddress = '0xaeEb5e5e097394CFf0e9Bb88cb62EFAF4841Dcc3';
const trustedWeatherAddress = '0x41A153E71C62b4CB918104EE0DFb9B29b30339CB';
const gas = 3000000;
const contractJson = [
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

var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
web3.eth.accounts.wallet.add(my_private_key);

const express = require('express');
const app = express();
const port = 1337;

app.use(require("body-parser").json())

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});

app.post('/api/v1/quote', (request, response) => {

	console.log("Processing QUOTE request...");
	console.log(request.body);

	var fromDate = request.body.fromDate;
	var toDate = request.body.toDate;
	var destination = request.body.destination;
	var insuranceValue = request.body.insuranceValue;
	var customerAddress = request.body.customerAddress;
	var rainMm = request.body.rainMm;

	var insurancePrice = 500; //TODO: create mock service

	try {

	  var contract = new web3.eth.Contract(contractJson, contractAddress);
	  contract.methods.createRainsurence(
	  	customerAddress, 
	  	trustedWeatherAddress, 
	  	insurancePrice,
	  	rainMm, 
	  	destination, 
	  	toDate).send({ 
	  		from: bankAddress, 
	  		gas: gas, value: 
	  		web3.utils.toWei(insuranceValue + ".0", "finney")
	  	},function(error, result) {

	        if(result == null) {
	        	console.log(error);
	            response.send(error);
	        } else {
	        	console.log(result);
	        	var resp = {
					insurancePrice: insurancePrice,
					smartContractId: result
				}
				response.send(resp); 
	        }

    	});
	}
    catch(err) {
    	console.log(err);
        response.send(err);
    }
});


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});
