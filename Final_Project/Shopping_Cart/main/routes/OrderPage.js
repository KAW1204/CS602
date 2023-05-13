const itemDB = require('../itemsDB.js');
const items = itemDB.getModel();



module.exports = async (req , res , next) => {
	var id = req.params.id;
	var data = items.findById(id, function(err,data){
		
		if(!data){
			return res.render('404', {title: "Error"});
		}
		
		if(err){
			console.log("Error:", err)
		}
		
		res.render("OrderPageView",{ 
			title: "Order Item",
			data: {id: data._id, //Set the data element to id of current user
			       item: data.item,
			       quantity: data.quantity,
			       price: data.price,
			       description: data.description
			       
			       }	
		})	
	})
	
	
   
        
};
