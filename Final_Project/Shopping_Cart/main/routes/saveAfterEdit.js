const itemDB = require('../itemsDB.js');
const custDB = require('../customerDB.js');

const customer = custDB.getModel();
const item = itemDB.getModel();

module.exports = async (req , res , next) => {
	let id = req.body.id //Get the id of the current item
	
	
	
	
	item.findById(id, function(err,data){
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){ //If there is no data, then return 404
			return res.render('404',{title: "Error" });
		}
		
		data.item = req.body.item //item name
		data.quantity = req.body.quantity
		data.price = req.body.price
		data.description = req.body.description
		
		data.save(function(err){
			if(err){//If error the user know
				console.log("Error:", err)
			}
			
			res.redirect('/items')//Go to the employees
		})
		
		
		
		
		
	})
	
	

    
    
    
 };
