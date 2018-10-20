var crypto = require('./cryptostuff');

const mainContract = crypto.mainContract;
const rainsuranceContract = crypto.rainsuranceContract;
const my_private_key = crypto.privateKey;
const contractAddress = crypto.contractAddress;
const bankAddress = crypto.bankAddress;
const trustedWeatherAddress = crypto.trustedWeatherAddress;
const gas = 8000000;

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
web3.eth.accounts.wallet.add(my_private_key);

var contract = new web3.eth.Contract(mainContract, contractAddress);

const express = require('express');
const app = express();
const port = 1337;

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});

app.post('/api/v1/quote', (request, response) => {

	console.log("Processing QUOTE request...");
	console.log(request.query);

	var fromDate = request.query.fromDate;
	var toDate = request.query.toDate;
	var destination = request.query.destination;
	var insuranceValue = request.query.insuranceValue;
	var customerAddress = request.query.customerAddress;
	var rainMm = request.query.rainMm;
	var insurancePrice = 500; //TODO: create mock service

	try {
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
    	})
	}
    catch(err) {
    	console.log(err);
        response.send(err);
    }
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened ...', err);
  }
  console.log(`Server is listening on port ${port} ...`);

  (function() {
		const Poller = require('./Poller');
		let poller = new Poller(1000); 
		poller.onPoll(() => {
		    console.log('Checking RAINsurances ...');

			contract.methods.getDiagnosesCount().call(function(error, numRainsurances){
				console.log(`Found ${numRainsurances} RAINsurances ...`);
				for (var i = 0; i < numRainsurances; i++) {
					contract.methods.insurances(i).call(function(error, rainsuranceAddress){
						var r = new web3.eth.Contract(rainsuranceContract, rainsuranceAddress);
						r.methods.money_bank().call(function(error, money_bank){
							r.methods.money_customer().call(function(error, money_customer){
								if (money_customer != 0 && money_bank != 0) {

								}
							});
						});
						
					});
				}
			});

		    poller.poll();
		});
		poller.poll();
  })();
});
