const custDB = require('../customerDB.js');
const customers = custDB.getModel();

module.exports = async (req , res , next) => {
	
	
	 
	 let customer = await customers.find({}); //Find customer
 
        let data = customer.map(info => { //map customer data to each key
			
            return {
                id: info._id,
                FirstName: info.FirstName,
                LastName: info.LastName
                
                
            }
            

        });
        
        
            
        res.render('displayCustomersView',
                {title:"Customers", data: data});
	
	
	
	
	
	
		
	

};