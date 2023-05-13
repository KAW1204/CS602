const custDB = require('../customerDB.js');
const customers = custDB.getModel();

module.exports = (req , res , next) => {
	
	var id = req.params.id
	customers.findById(id, function(err, data){ //find the customer in the database by id
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){//If no data then return 404 error
			return res.render("404", {title: "Error"}) 
		}
		
		res.render('editCustomerView',{
			title: "Edit Customer",
			data: {id: data._id, //Set the data element to the current id
			FirstName: data.FirstName, //set to current user's first name
			LastName: data.LastName,
			Orders: data.Orders
		
			
			
			
			}
			
			
			
			
		})
	})
	
	
		
	
	
	
	
		
	

};