const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = async (req , res , next) => {
	var id = req.params.id
	Employee.findById(id, function(err, data){ //find the user in the database by id
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){//If no data then return 404 error
			return res.render("404", {title: "Error"}) 
		}
		
		res.render('editEmployeeView',{
			title: "Edit User",
			data: {id: data._id, //Set the data element to the current id
			firstName: data.firstName, //set to current user's first name
			lastName: data.lastName
			
			
			}
			
			
			
			
		})
	})


    
};

