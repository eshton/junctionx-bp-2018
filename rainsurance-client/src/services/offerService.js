class OfferService {
	async getOffer() {
		const fromDate = "1540042175";
		const toDate = "1540142175";
		const destination = "Paris";
		const insuranceValue = 5;
		const customerAddress = "0x171a33c7f7AF13237cE4B0830712b6943e618d14";
		const rainMm = 4;
		var body = {
			"fromDate": fromDate,
			"toDate": toDate,
			"destination": destination,
			"insuranceValue": insuranceValue,
			"customerAddress": customerAddress,
			"rainMm": rainMm
		};
		console.log(JSON.stringify(body));
		const res = await fetch('http://127.0.0.1:1337/api/v1/quote', { 
				method: 'POST', 
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});
		const json = await res.json();

		console.log(json);
		this.pollId = json.pollId;
		this.price = json.insurancePrice;
		return json.insurancePrice;
	}

	async pollTransaction() {
		const wait = (time = 1000) => new Promise(resolve => setTimeout(resolve, time));
		let res;

		do {
			res = await fetch(`http://127.0.0.1:1337/api/v1/address_for_pollid/${this.pollId}`);

			if (res == "0x0000000000000000000000000000000000000000") {
				await wait();
			}
		} while (res != "0x0000000000000000000000000000000000000000");

		this.contractId = res;
	}

	async pay() {
		const my_private_key = "0x1600d5ea8d7ce83f109a65378fbac854e52ba65dec87045a86fd2c975f2c270b"
		const contractAddress = this.contractId;
		const price = this.price;
		const myAddress = '0x171a33c7f7AF13237cE4B0830712b6943e618d14';
		
		var body = {
			"privateKey": my_private_key,
			"contractAddress": contractAddress,
			"price": price,
			"myAddress": myAddress
		};
		console.log(JSON.stringify(body));
		await fetch('http://127.0.0.1:1337/api/v1/pay', { 
				method: 'POST', 
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});
	}
}

export default new OfferService();
