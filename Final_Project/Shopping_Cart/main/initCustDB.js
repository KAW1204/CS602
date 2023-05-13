const custDB = require('./customerDB.js');

const customer = custDB.getModel();

(async() => {

	await customer.deleteMany({});

	let customer1 = new customer({
		FirstName: 'Kenyon',
		LastName: "Wilkerson",
		Orders: ["Milk", "Salad", "Chcolate"]
	}); 

	let customer2 = new customer({
		FirstName: 'Kenyon',
		LastName: "Wilkerson",
		Orders: ["Juice", "Lettuce", "Ice Cream"]
	}); 

	let customer3 = new customer({
		FirstName: 'Kenyon',
		LastName: "Wilkerson",
		Orders: ["Apple Juice", "Steak", "Chcolate Bar"]
	}); 


	await Promise.all([
			customer1.save(), 
			customer2.save(), 
			customer3.save()
		]);

	let currentCust = await customer.find({});

	console.log(currentCust);

	process.exit();


})();












