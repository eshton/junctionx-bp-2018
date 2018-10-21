export default () => {
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
	fetch('http://127.0.0.1:1337/api/v1/quote', { 
			method: 'POST', 
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		})
	    .then(res => res.json())
	    .then(json => console.log(json));
};
