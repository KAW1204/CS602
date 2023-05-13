const itemDB = require('../itemsDB.js');
const item = itemDB.getModel();

module.exports = async (req , res , next) => {
	
	var item_param = req.params.item
	
	console.log(item_param);
	

	var request_item;
	
	let items = await item.find({});
	
	
	item.find({}, (err, users) => {
			if(err){
				console.log("err");
			}
			
			
			users.filter(data => {
				
				if(data.item == item_param){
					findid(data._id); //If the data is found enter function to convert to json data
					
					
					}
					
					else{
						console.log("No Item Found")
					}
					
				
					
				
					
			
			
		});
		
		
		});
		
		function findid(id) {
			return item.findById(id, function(err,data){ //Get the data for the item you by id
				
				
			res.format({ //json format
		'application/json':function(){
			res.json(data); //Put data in JSON format
			
			
		},
		
		'application/xml': function(){ //xml format
			let info = data; //Put data in XML format
			var zipcodexml = '<?xml version = "1.0"?>\n' +
			'<item"' + "item= " + info.item + '">' + "\n" +
			'<price>"' + info.price + '">' +'</price>'+ "\n" +
			'<quantity>"' + info.quantity + '">' +'</quantity>'+ "\n" +
			'<description>"' + info.description + '">' +'</description>' + "\n" +'</item>' 
			
			res.type('application/xml');
			res.send(zipcodexml);
			
			
		}

	
	
	
		
	

});
				
				
				
			
			
			
		});
		
		}
		
		
		
		
	
	
	
	   



}
