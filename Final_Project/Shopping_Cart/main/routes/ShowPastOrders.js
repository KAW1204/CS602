
const custDB = require('../customerDB.js');
const customers = custDB.getModel();

module.exports =  async (req , res , next) => {
	let fname = req.body.firstName;
	let lname = req.body.lastName;
	
	var past_orders = await customers.find({});
	
	var result = past_orders.filter(users => users.FirstName == fname && users.LastName == lname); //Look up the user so we can
	
	var result_2 = result.map(users => ({PastOrders: users.PastOrders}))//Show past orders of the user we just looked up
	
	
	res.render("showPastOrdersView", {title: "Past Orders", data: result_2[0]})
	
	
				
		
					             
        
  
  
  
            
  
  
  
  
  
  
  
  
  
  
  
  
  }

  