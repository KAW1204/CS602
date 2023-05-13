const custDB = require('../customerDB.js');
const customer = custDB.getModel();

module.exports = async (req , res , next) => {
	
	let id = req.body.id
	
	customer.findById(id, function(err,data){ //Find user by id
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){
			return res.render('404');
		}
		
		data.remove(id,function(err){ //Remove user from database
			if(err){
				console.log("Error:", err)
			}
			
			res.redirect('/customer') //redirect to customer
		})
		
		
		
		
		
	})
	
	
	
		
	

};