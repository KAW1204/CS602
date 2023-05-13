const itemDB = require('../itemsDB.js');
const items = itemDB.getModel();

const custDB = require('../customerDB.js');
const customers = custDB.getModel();

module.exports =  async (req , res , next) => {
	let id = req.body.id
	let fname = req.body.firstName;
	let lname = req.body.lastName;
	let quantity = req.body.quantity;
	var item_add; //Placeholder for item user selected
	
		items.findById(id, function(err,data){ //Find user by id
		if(err){
			console.log("Error:", err)
		}
//------------------------------------------------------//		
		if(!data){
			return res.render('404');
		}
//-------------------------------------------------------//
		if(quantity <= data.quantity){
			let new_quantity = data.quantity - quantity; //Subtract item current quantity with the amount the user wants
			data.quantity = new_quantity;
			item_add = data.item;
//---------------------------------------------------------------------------------------//			
			customers.find({}, (err, users) => {//Find all the customers
			if(err){
				console.log("err");
			}
			
			
			users.map(users => {
				if(users.FirstName == fname && users.LastName == lname){ //Is firstname and lastname are in database
					users.Orders.push(item_add);
					users.PastOrders.push(item_add);
					
					
					users.save(function(err){ //save new user info
			if(err){//If error the user know
				console.log("Error:", err)
			}
			
			
		})
		
		data.save(function(err){ //save new data info
			if(err){//If error the user know
				console.log("Error:", err)
			}
		})	
				}
				
				else{
					
					console.log("User does not exist");
						
				}
				
			})
			
		})
		
//--------------------------------------------------------------------------------------------------------
			
		}
		else{
			
			console.log("Not enough of this item. Choose another or lessen the amount you want") //If the user wants too many items
				
		}
		})

//----------------------------------------------------------------------------------------------------------------//		
		
	let item = await items.find({});
	
	 let data = item.map( itm => {
            return {
                id: itm._id,
                item: itm.item,
                quantity: itm.quantity,
                price: itm.price,
                description: itm.description
                
            }
            
        });
        
        
        
        res.redirect('/browse');
                
	
	
	
	
	
	
	
	
	
	
	
    
    
    
        
  };

  