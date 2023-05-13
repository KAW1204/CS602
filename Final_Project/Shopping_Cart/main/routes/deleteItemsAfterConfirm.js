const itemDB = require('../itemsDB.js');
const item = itemDB.getModel();

module.exports =  async (req , res , next) => {
	let id = req.body.id
	item.findById(id, function(err,data){ //Find item by id
		if(err){
			console.log("Error:", err)
		}
		
		if(!data){
			return res.render('404');
		}
		
		data.remove(id,function(err){ //Remove item from database
			if(err){
				console.log("Error:", err)
			}
			
			res.redirect('/items') //Reirect back to item
		})
		
		
		
		
		
	})
		
	
	
	
    
    
    
        
  };

  