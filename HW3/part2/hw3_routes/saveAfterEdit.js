const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = async (req , res , next) => {
	let id = req.body.id //Get the id of the current user
	
	
	Employee.findById(id, function(err,data){
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){ //If there is no data, then return 404
			return res.render('404',{title: "Error" });
		}
		
		data.firstName = req.body.fname //first name 
		data.lastName = req.body.lname
		
		data.save(function(err){
			if(err){//If error the user know
				console.log("Error:", err)
			}
			
			res.redirect('/employees')//Go to the employees
		})
		
		
		
		
		
	})
	
	

    
    
    
 };
