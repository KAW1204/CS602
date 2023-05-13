const MongoClient = require('mongodb').MongoClient;
const credentials = require("./credentials.js");

const dbUrl = 'mongodb+srv://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + '/' + credentials.database;

let client = null;

const getConnection = async () => {
	if (client == null)
		client = await MongoClient.connect(dbUrl,  { useNewUrlParser: true ,  useUnifiedTopology: true });
	return client;
}

module.exports.lookupByZipCode =  async (zip) => {
		
	let client = await getConnection() 
		
	let collection = client.db(credentials.database).collection('zipcodes');
	
	let result = await collection.find({'_id': zip}).toArray();
	
	if (result.length > 0)
		return result[0];
	else
		return undefined;
};

// Complete the code for the following

module.exports.lookupByCityState = async (city, state) => {

	let client = await getConnection()
	
	let collection = client.db(credentials.database).collection('zipcodes');
	
	const result = await collection.find({'city': city, 'state':state}).toArray();
	
	var result_2 = result.map(element => ({zip: element._id, pop: element.pop}))
	
	//Map the data that was found in the result array
	
	return ({state: state, city: city, data: result_2})
	

	
	
	
	// Fill in the rest


};

module.exports.getPopulationByState = 
	async (state) => {

		let client = await getConnection();
		let collection = client.db(credentials.database).collection("zipcodes");
		
	
	let result = await collection.find({'state':state}).toArray();
	
	var accum =  result.reduce((sum, info) => {
		if(info.state == state){
			sum += info.pop
			
			//Sum equals all the population that map the state
			
		}
		
		return sum
		
		
		
		
		
		
	},0)
	
	return({state: state, pop: accum})
	
		
	};

