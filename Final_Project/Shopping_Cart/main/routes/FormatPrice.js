const itemDB = require('../itemsDB.js');
const item = itemDB.getModel();

module.exports = async (req , res , next) => {
	
	var item_price = req.params.price
	
	let items = await item.find({});
	
	var results = items.filter(element => element.price < item_price); //If item price is below  user entered price
	
	findid(results);
	
		
		function findid(data) {	
			res.format({ //json format
		'application/json':function(){
			res.json(data);  //put data into json format
			
			
		},
		
		'application/xml': function(){ //xml format
			let info = data[0];
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
		
}
