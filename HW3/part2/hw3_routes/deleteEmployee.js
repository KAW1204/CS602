const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();


module.exports = async (req , res , next) => {
	var id = req.params.id;
	var data = Employee.findById(id, function(err,data){
		if(!data){
			return res.render('404', {title: "Error"});
		}
		
		if(err){
			console.log("Error:", err)
		}
		
		res.render("deleteEmployeeView",{
			title: "Delete User?",
			data: {id: data._id, //Set the data element to id of current user
			       firstName: data.firstName,
			       lastName: data.lastName
			       }	
		})	
	})
	
	
	
	
	
	
	
	
	
		
		
		
		
		
		
	
	
	
		
	
    
   
        
  };

  