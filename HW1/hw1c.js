const colors = require('colors');

const ZipCodeEmitter = require('./zipCodeEmitter').ZipCodeEmitter;

const cities = new ZipCodeEmitter();

//KENYON WILKERSON CS602//
cities.on('lookupByZipCode', function(args){
	console.log("Event lookupByZipCode raised", args)
	
	
}) 

cities.lookupByZipCode("02215")


cities.on('lookupByCityState', function(args){
	console.log("Event lookupByCityState raised (Handle1)", args)
	
	
	
	
	
	
}) 


cities.on('lookupByCityState', function(args){
	//Print out the data that the event returned
	console.log("Event lookupByCityState raised (Handle2)")
	console.log("City: " + args.city + " State: " + args.state)
	
	
		//Iterate through the zip codes and populations]
	for(i= 0; i < args.data.length; i++){
		console.log(args.data[i].zip + " has a population of " + args.data[i].pop)
		}
		
	
	
	
	
	
})



cities.lookupByCityState("BOSTON", "MA")

cities.on('getPopulationByState', function(args){
	console.log("Event getPopulationByState", args)
	
	
	
}) 




cities.getPopulationByState("MA")




