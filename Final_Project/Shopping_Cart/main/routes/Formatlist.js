const itemDB = require('../itemsDB.js');
const item = itemDB.getModel();

module.exports = async (req , res , next) => {
	
	var item_param = req.params.item
	
	let items = await item.find({});
	
			res.format({ //json format
		'application/json':function(){
			res.json(items);
			
			
		},
		
		'application/xml': function(){ //xml format
			let info = items[0] //set info to the ites you found
			var zipcodexml = '<?xml version = "1.0"?>\n' +
			'<item"' + "item= " + info.item + '">' + "\n" +
			'<price>"' + info.price + '">' +'</price>'+ "\n" +
			'<quantity>"' + info.quantity + '">' +'</quantity>'+ "\n" +
			'<description>"' + info.description + '">' +'</description>' + "\n" +'</item>' 
			
			res.type('application/xml');
			res.send(zipcodexml);
			
			
		}

	
	
	
		
	

});
				
				
				
			
		
		
		
		
		
		
	
	
	
	   



}
