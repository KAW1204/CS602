const itemsDB = require('../itemsDB.js');
const item = itemsDB.getModel();

module.exports = async (req , res , next) => {
	
    var new_item = new item({//Create a new item object
		item: req.body.item,
		quantity: req.body.quantity,
		price: req.body.price,
		description: req.body.description
		});
	
	new_item.save(function (err){ //Save the new item with the data just inserted
		
		if(err){
			
			console.log("Error:", err)
		}
		
		res.redirect('/items');
		
		
	})
    
  
  };
