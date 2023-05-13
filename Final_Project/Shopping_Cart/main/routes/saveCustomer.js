const custDB = require('../customerDB.js');
const customer = custDB.getModel();


module.exports = async (req , res , next) => {
	
    var new_customer = new customer({//Create a new item object
		FirstName: req.body.firstName,
		LastName: req.body.lastName,
		});
	
	new_customer.save(function (err){ //Save the new customer with the data just inserted
		
		if(err){
			
			console.log("Error:", err)
		}
		
		res.redirect('/customer');
		
		
	})
    
  
  };
