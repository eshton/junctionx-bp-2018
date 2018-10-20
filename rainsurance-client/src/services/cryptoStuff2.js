export default (toContractAddress, insurancePrice) => {
	const my_private_key = "0x3C6A887EB2D2B01852A0C09566738A02F6F2DABDD62B0D972D2B2FE6417141B0"
	const contractAddress = toContractAddress;
	const price = insurancePrice;
	const myAddress = '0xe86A9E3Bf11aD57E8cADcE910C1A4865B5793545';
	
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