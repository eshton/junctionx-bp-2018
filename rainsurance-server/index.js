var crypto = require('./cryptostuff');

const mainContract = crypto.mainContract;
const rainsuranceContract = crypto.rainsuranceContract;
const bankPrivateKey = crypto.bankPrivateKey;
const weatherPrivateKey = crypto.weatherPrivateKey;
const mainContractAddress = crypto.mainContractAddress;
const bankAddress = crypto.bankAddress;
const trustedWeatherAddress = crypto.trustedWeatherAddress;
const ropstenUrl = 'https://ropsten.infura.io';
const gas = 4000000;

var Web3 = require('web3');

const express = require('express');
const app = express();
const port = 1337;

app.use(require("body-parser").json())

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});

app.post('/api/v1/pay', (req,res) => {
	console.log("Processing payment ...");
	console.log(request.body);

	var privateKey = request.body.privateKey;
	var contractAddress = request.body.contractAddress;
	var price = request.body.price;
	var myAddress = request.body.myAddress;

	var web3 = new Web3(new Web3.providers.HttpProvider(ropstenUrl));
	web3.eth.accounts.wallet.add(privateKey);

    var c = new web3.eth.Contract(rainsuranceContract, contractAddress);

	c.methods.receiveMoneyFromCustomer().send({ 
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
});

app.get('/api/v1/address_for_pollid/:pollId', (request, response) => {
	pollId = request.params.pollId;
	var web3 = new Web3(new Web3.providers.HttpProvider(ropstenUrl));
	web3.eth.accounts.wallet.add(bankPrivateKey);

	var contract = new web3.eth.Contract(mainContract, mainContractAddress);

	contract.methods.getAddressForPollId(pollId).call(function(err, address){
	    if (err) {
	      console.log(err);
	    } else if (address !== null) {
	      // Transaction went through
      	  console.log(address)
          response.send(address);
	    }
	    else {
	    	response.send("ERROR");
	    }
	});
});

app.post('/api/v1/quote', (request, response) => {

	console.log("Processing QUOTE request...");
	console.log(request.body);

	var web3 = new Web3(new Web3.providers.HttpProvider(ropstenUrl));
	web3.eth.accounts.wallet.add(bankPrivateKey);
	var contract = new web3.eth.Contract(mainContract, mainContractAddress);

	var pollId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	var fromDate = request.body.fromDate;
	var toDate = request.body.toDate;
	var destination = request.body.destination;
	var insuranceValue = request.body.insuranceValue;
	var customerAddress = request.body.customerAddress;
	var rainMm = request.body.rainMm;

	var insurancePrice = 5; //TODO: create mock service

	try {
	  contract.methods.createRainsurence(
	  	pollId,
	  	customerAddress, 
	  	trustedWeatherAddress, 
	  	web3.utils.toWei(insurancePrice + ".0", "finney"),
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
					pollId: pollId
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

	var web3 = new Web3(new Web3.providers.HttpProvider(ropstenUrl));
	web3.eth.accounts.wallet.add(weatherPrivateKey);
	var contract = new web3.eth.Contract(mainContract, mainContractAddress);

  (function() {
		const Poller = require('./Poller');
		let poller = new Poller(1000); 
		poller.onPoll(() => {

			return;
		    console.log('Checking RAINsurances ...');

			contract.methods.getDiagnosesCount().call(function(error, numRainsurances){
				console.log(`Found ${numRainsurances} RAINsurances ...`);
				for (var i = 0; i < numRainsurances; i++) {
					contract.methods.insurances(i).call(function(error, rainsuranceAddress){
						console.log(rainsuranceAddress);
						var r = new web3.eth.Contract(rainsuranceContract, rainsuranceAddress);
						r.methods.money_bank().call(function(error, money_bank){
							r.methods.money_customer().call(function(error, money_customer){
								// if (money_customer != 0 && money_bank != 0) {
								// 	r.methods.updateRain(500).call(function(error, result){
								// 		if (error) {

								// 		} else {
								// 			console.log('Rainsurance finished successfully ...');	
								// 		}
								// 	});
								// }
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
