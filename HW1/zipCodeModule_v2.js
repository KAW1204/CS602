const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
	var result = data.find(element => element._id == zip);
	//find data that equals info
	
	return result;
		
		
		
		


	
	
	
		
};

module.exports.lookupByCityState = (city, state) => {
	
	
	var result = data.filter(element => element.state == state && element.city == city);
	
	var result_2 = result.map(element => ({zip: element._id, pop: element.pop}))
	
	//Map the data that was found in the result array
	
	return ({state: state, city: city, data: result_2})
	

	

	

	

	
	
	
	
	
	
		
};

module.exports.getPopulationByState = (state) => {
	var accum =  data.reduce((sum, info) => {
		if(info.state == state){
			sum += info.pop
			
			//Sum equals all the population that map the state
			
		}
		
		return sum
		
		
		
		
		
		
	},0)
	
	return({state: state, pop: accum})
	
	
	
	
	
	
		
	
	
		
	
	
		
};

