export default (toContractAddress, insurancePrice) => {
	const my_private_key = "0x1600d5ea8d7ce83f109a65378fbac854e52ba65dec87045a86fd2c975f2c270b"
	const contractAddress = toContractAddress;
	const price = insurancePrice;
	const myAddress = '0x171a33c7f7AF13237cE4B0830712b6943e618d14';
	
	var body = {
		"privateKey": my_private_key,
		"contractAddress": contractAddress,
		"price": price,
		"myAddress": myAddress
	};
	console.log(JSON.stringify(body));
	fetch('http://127.0.0.1:1337/api/v1/pay', { 
			method: 'POST', 
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		})
	    .then(res => res.json())
	    .then(json => console.log(json));
}