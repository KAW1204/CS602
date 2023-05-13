const custDB = require('../customerDB.js');
const customer = custDB.getModel();


module.exports = async (req , res , next) => {
	
	var id = req.params.id;
	var data = customer.findById(id, function(err,data){
		
		if(!data){
			return res.render('404', {title: "Error"});
		}
		
		if(err){
			console.log("Error:", err)
		}
		
		res.render("deleteCustomerView",{ //Delete customer view and send data to the view
			title: "Delete Customer?",
			data: {id: data._id, //Set the data element to id of current user
			       FirstName: data.FirstName,
			       LastName: data.LastName,
			       
			       
			       }	
		})	
	})
	
	
	
	
	
	
	
	
	
		
		
		
		
		
		
	
	
	
		
	
    
   
        
  };

  