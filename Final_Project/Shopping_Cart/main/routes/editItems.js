const itemDB = require('../itemsDB.js');
const item = itemDB.getModel();

module.exports = async (req , res , next) => {
	var id = req.params.id
	item.findById(id, function(err, data){ //find the user in the database by id
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){//If no data then return 404 error
			return res.render("404", {title: "Error"}) 
		}
		
		res.render('editItemsView',{
			title: "Edit Item",
			data: {id: data._id, //Set the data element to the current id
			item: data.item, //set to current user's first name
			quantity: data.quantity,
			price: data.price,
			description: data.description
			
			
			}
			
			
			
			
		})
	})


    
};

