export default () => {
	const fromDate = "1540042175";
	const toDate = "1540142175";
	const destination = "Paris";
	const insuranceValue = 5000;
	const customerAddress = "0xe86A9E3Bf11aD57E8cADcE910C1A4865B5793545";
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
	fetch('http://127.0.0.1:1337/api/v1/quote', { 
			method: 'POST', 
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		})
	    .then(res => res.json())
	    .then(json => console.log(json));
};
