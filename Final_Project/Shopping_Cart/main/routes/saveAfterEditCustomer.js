const custDB = require('../customerDB.js');

const customer = custDB.getModel();


module.exports = async (req , res , next) => {
	let id = req.body.id //Get the id of the current item
	
	
	
	
	customer.findById(id, function(err,data){
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){ //If there is no data, then return 404
			return res.render('404',{title: "Error" });
		}
		
		data.FirstName = req.body.firstName //first name 
		data.LastName = req.body.lastName
		data.Orders = req.body.orders
		
		
		
		
		data.save(function(err){
			if(err){//If error the user know
				console.log("Error:", err)
			}
			
			res.redirect('/customer')//Go to the customers
		})
		
		
		
		
		
	})
	
	

    
    
    
 };
