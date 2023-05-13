const itemDB = require('../itemsDB.js');
const item = itemDB.getModel();


module.exports = async (req , res , next) => {
	var id = req.params.id;
	var data = item.findById(id, function(err,data){
		
		if(!data){
			return res.render('404', {title: "Error"});
		}
		
		if(err){
			console.log("Error:", err)
		}
		
		res.render("deleteItemsView",{
			title: "Delete Item?",
			data: {id: data._id, //Set the data of current item
			       item: data.item,
			       quantity: data.quantity,
			       price: data.price,
			       description: data.description
			       
			       }	
		})	
	})
	
	
	
	
	
	
	
	
	
		
		
		
		
		
		
	
	
	
		
	
    
   
        
  };

  