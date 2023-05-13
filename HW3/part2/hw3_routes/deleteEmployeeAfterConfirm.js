const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports =  async (req , res , next) => {
	let id = req.body.id
	Employee.findById(id, function(err,data){ //Find user by id
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
			
			res.redirect('/employees')
		})
		
		
		
		
		
	})
		
	
	
	
    
    
    
        
  };

  