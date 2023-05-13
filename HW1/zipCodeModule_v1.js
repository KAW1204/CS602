const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
	
	try{
		//Iterate through the data information
       for(i = 0; i <= data.length; i++ ){
		   
		   if(zip == data[i]._id){
		       return data[i];
		   
          }
          
          }
          
         
          
         
          
         
           
           
    
       }
       
       //If Type error undefined calls, handle it here//
        catch(TypeError){
			return undefined + ": Zip code not found"
			  
		  }
       
       		
};

module.exports.lookupByCityState = (city, state) => {
	const state_info = [];
	try{
	for(i = 0; i <= data.length-1; i++ ){
		   //Make city and state input uppercase to control for user error//
		   if(city.toUpperCase() == data[i].city && state.toUpperCase() == data[i].state){
			   
		       state_info.push(({zip: data[i]._id, pop: data[i].pop}))
		       //Push data into array
		   
          }
          
          
          
          }
          //Nothing in the state_info array means city and ste dont exist
          
		  
		  
          return ({city: city, state: state ,data:state_info})
          
          
         
       }
       
        catch(TypeError){
			return undefined + ": State and city not found"
			  
		  }
		
};

module.exports.getPopulationByState = (state) => {
	let population = 0;
	try{
	for(i = 0; i <= data.length-1; i++ ){
		   
		   if(state.toUpperCase() == data[i].state){
		       population = population + data[i].pop;
		       
		       
		       
		   
          }
          
         
          
          
          
          }
          
          
         
          
          
          
          return ({State: state, pop: population});
          
         
       }
       
        catch(TypeError){
			return undefined + ": State not found"
			  
		  }
		
};

