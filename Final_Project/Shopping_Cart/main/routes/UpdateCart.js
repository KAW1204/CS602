const custDB = require('../customerDB.js');
const customer = custDB.getModel();

module.exports = async (req , res , next) => {
	
	
	var id = req.body.id;
	var del_order = req.body.DelOrders;//Get the data that you want to delete
	var add_order = req.body.AddOrders; //Get the data that you want to add
	
	var data = customer.findById(id, function(err,data){
		
	customer.findById(id, function(err,data){
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){ //If there is no data, then return 404
			return res.render('404',{title: "Error" });
		}
		
		if(del_order){ //If there is del data then delete
		for(const items of data.Orders){
			if(del_order == items){
				data.Orders.remove(del_order) //Remove from cart
				break;
			}
			
		}
		
		}
		
		
		if(add_order){ //If there
			data.Orders.push(add_order); //Add to cart
			
		}
		
		
		
		
		data.save(function(err){
			if(err){//If error the user know
				console.log("Error:", err)
			}
			
			res.redirect('/customer')//Go to the customers
		})
	
	
	
	
		
	

});

});


};