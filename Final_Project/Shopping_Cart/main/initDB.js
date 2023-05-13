const itemDB = require('./itemsDB.js');

const item = itemDB.getModel();

(async() => {

	await item.deleteMany({});

	let grocery1 = new item({
		item:'Oreos',
		quantity: 10,
		description: 'White Beverage that comes from cows',
		price: 23.99
	}); 

	let grocery2 = new item({
		item:'Milk',
		quantity:6,
		description: 'White Beverage that comes from cows',
		price: 23.99
	}); 

	let grocery3 = new item({
		item:'Kisses',
		quantity: 20,
		description: 'White Beverage that comes from cows',
		price: 23.99
	}); 


	await Promise.all([
			grocery1.save(), 
			grocery2.save(), 
			grocery3.save()
		]);

	let currentItem = await item.find({});

	console.log(currentItem);

	process.exit();


})();












