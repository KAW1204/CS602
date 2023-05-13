const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = async (req , res , next) => {
	
    var new_employee = new Employee({//Create a new employee object
		firstName: req.body.fname,
		lastName: req.body.lname
		});
	
	new_employee.save(function (err){ //Save the new employee with the data just inserted
		
		if(err){
			
			console.log("Error:", err)
		}
		
		res.redirect('/employees');
		
		
	})
    
  
  };
