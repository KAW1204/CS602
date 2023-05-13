const itemDB = require('../itemsDB.js');
const items = itemDB.getModel();

module.exports =  async (req , res , next) => {
	
		var query = req.body.SearchBar;
		
		let item = await items.find({});
		
		var data = item.filter(info => info.item == query || info.description == query);
		
		var data_2 = data.map(info => ({item:info.item, //Return search data
		quantity: info.quantity, 
		price:info.price, 
		description: info.description}))
		
		
		
		res.render("SearchResultView", {title: "Results", data:data_2});
		
		
		
		
			
		
		   
		   
		  
					
			
            
            
 
            
       
        
        
        
        
        
        }
        
      
					 
    
        
  