const EventEmitter = require('events').EventEmitter;
const data = require('./zips.json');

// Custom class 
class ZipCodeEmitter  extends EventEmitter {
	
	constructor(args){
		super();
		this.data = args;
	}

	lookupByZipCode(zip)  {
		var result = data.find(element => element._id == zip); //find method//
	    this.emit("lookupByZipCode", result)
	    
		
	
	}

	lookupByCityState(city, state)  {
		var result = data.filter(element => element.state == state && element.city == city);
	
	    var result_2 = result.map(element => ({zip: element._id, pop: element.pop}))
	    
	    this.emit("lookupByCityState", ({state: state, city: city, data: result_2}))
	    //Emit the function
	
	}

	getPopulationByState(state) {
		var accum =  data.reduce((sum, info) => {
		if(info.state == state){ //If user input equals desired state//
			sum += info.pop
			
		}
		
		return sum
		
		
		
		
		
		
	},0)
	
	
	this.emit("getPopulationByState", ({state: state, pop: accum}) )
	
	}
	

	

}


module.exports.ZipCodeEmitter = ZipCodeEmitter;

