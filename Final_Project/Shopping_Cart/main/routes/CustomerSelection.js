const custDB = require('../customerDB.js');
const customer = custDB.getModel();

module.exports = async (req , res , next) => {
	
	
	var id = req.params.id; //Get the ID of the 

	var data = customer.findById(id, function(err,data){ //data of user
		
		if(!data){
			return res.render('404', {title: "Error"});
		}
		
		if(err){
			console.log("Error:", err)
		}
		
		res.render("CustomerSelectionView",{
			title: data.FirstName + data.LastName,
			data: {id: data._id, //Set the data element to id of current user
			       FirstName: data.FirstName,
			       LastName: data.LastName,
			       Orders:data.Orders,
			       PastOrders: data.PastOrders
			       
			       
			       }
	
	
	
	
		
	

});

});


};