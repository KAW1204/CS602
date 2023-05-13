const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup handlebars view engine
const handlebars = require('express-handlebars');

app.engine('handlebars', 
	handlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// static resources
app.use(express.static(__dirname + '/public'));

// Use the zipCode module
const cities = require('./zipCodeModule_v2');

// GET request to the homepage

app.get('/',  (req, res) => {
	res.render('homeView')
	
	
	

	
});

app.get('/zip', (req, res) => {
	let zip = req.query.id
	
	if(zip === undefined){
	res.render("lookupByZipForm")
	}
	
	else{
		let info = cities.lookupByZipCode(zip)
	
		
		if(info === undefined){ //If the info is not present then let the user know
		res.render("lookupByZipView",{
		  zip: "undefined",
		  city: "N/A",
		  state: "N/A",
		  pop: "N/A"
		
			
			
			
			
			
		})
		
		}
		
		else{ //If the data is present render it to the correct view
		  res.render("lookupByZipView",{
		  zip: info._id,
		  city: info.city,
		  state: info.state,
		  pop: info.pop
		
			
			
			
			
			
		})
			
			
		}
		
	}
	

	
	
	
	
	
	

});

app.post('/zip', (req, res) => {
	var zip = req.body.id
	var info = cities.lookupByZipCode(zip)
	
	if(info === undefined ){
		res.render("lookupByZipView", {
			zip: "Undefined",
			city: "N/A",
			state: "N/A",
			pop: "N/A"
			
		})
	}
	
	else{
	res.render("lookupByZipView",{
		zip: info._id,
		city: info.city,
		state: info.state,
		pop: info.pop
		
		
		
	})
	
	
	}
	
	
	

});

// Implement the JSON, XML, & HTML formats

app.get('/zip/:id', (req, res) => {
	var zip = req.params.id
	
	
	
	res.format({ //json format
		'application/json':function(){
			res.json(cities.lookupByZipCode(zip))
			
			
		},
		
		'application/xml': function(){ //xml format
			let info = cities.lookupByZipCode(zip)
			var zipcodexml = '<?xml version = "1.0"?>\n' +
			'<zipCode"' + "id= " + info._id + '">' + "\n" +
			'<city>"' + info.city + '">' +'</city>'+ "\n" +
			'<state>"' + info.state + '">' +'</state>'+ "\n" +
			'<pop>"' + info.pop + '">' +'</pop>' + "\n" +'</zipCode>' 
			
			res.type('application/xml');
			res.send(zipcodexml);
			
			
		},
		
		'text/html': function() { //html format
			let info = cities.lookupByZipCode(zip)
			if(info === undefined ){
				
		res.render("lookupByZipView", {
			zip: "Undefined",
			city: "N/A",
			state: "N/A",
			pop: "N/A"
			
		})
	}
	
	else{
	res.render("lookupByZipView",{
		zip: info._id,
		city: info.city,
		state: info.state,
		pop: info.pop
		
		
		
	})
	
	
	}
			
			},
			
			
			'default': function(){
				res.status(404)
				res.send("<b> - Not Found</b>")
			}
			
	})
	
});



app.get('/city', (req, res) => {
	let city = req.query.city
	let state = req.query.state
	
	
	if(city === undefined){
	res.render("lookupByCityStateForm")
	}
	
	else{
		let info = cities.lookupByCityState(city,state)
	
		
		if(info === undefined){
		res.render("lookupByCityStateView",{
	      code: "undefined",
		  city: "N/A",
		  state: "N/A"
		  
		
		})
		
		}
		
		else{
		  res.render("lookupByCityStateView",{
		  code: info.data,
		  city: info.city,
		  state: info.state
		  
		  
		
			
	
			
		})
		
		}
		
		}
	
	
	
});

app.post('/city', (req, res) => {
	let city = req.body.city
	let state= req.body.state //Get input data from user
	
	
	if(city === undefined || state == undefined){ //If either city or state is undefined then return user to form
	res.render("lookupByCityStateForm")
	}
	
	else{
		let info = cities.lookupByCityState(city, state)
		
		
		if(info === undefined){
		res.render("lookupByCityStateView",{
			code: "undefined",
			city: info.city,
			state: info.state
			
		  
		
		})
		
		}
		
		else if(info.data.length === 0){ //If there is no state or city
			res.render("lookupByCityStateView",{
				code: "NULL",
				city: info.city,
			    state: info.state

			})
			
		}
		
		else{
		 
		  res.render("lookupByCityStateView",{
			  
		  code: info.data,
		  city: info.city,
		  state: info.state
		  
		
			
	
			
		})
		
		}
		
		}
	

});

// Implement the JSON, XML, & HTML formats

app.get('/city/:city/state/:state', (req, res) => {
	var city = req.params.city
	var state = req.params.state
	
	res.format({
		'application/json':function(){
			res.json(cities.lookupByCityState(city,state))
			
			
		},
		
		'application/xml': function(){
			var info = cities.lookupByCityState(city,state)
			var zipcodexml = '<?xml version = "1.0"?>' + "\n"+  "<city-state " +
			'city= "' + info.city + '" ' + 'state= "'+ //show the correct data to the screen with format
			info.state + '">' + "\n" + '<entry: "' + JSON.stringify(info.data) +'"entry/>' +
		"\n"+"</city-state>"
			
			
			res.type('application/xml');
			res.send(zipcodexml);
			
			
		},
		
		'text/html': function() {
			let info = cities.lookupByCityState(city,state)
			if(info === undefined ){
				
		res.render("lookupByCityStateView", {
			code: "NULL",
			city: "N/A",
			state: "N/A"
			
		})
	}
	
	else{
	res.render("lookupByCityStateView",{
		code: info.data,
		city: info.city,
		state:info.state
		
		
	})
	
	
	}
			
			},
			
			
			
			'default': function(){
				res.status(404)
				res.send("<b> - Not Found</b>")
			}
		
		
		
		
		
		
		
		
		
		
		
		
	})
	


});



app.get('/pop', (req, res) => {
	let state = req.query.state
	
	if(state === undefined){
	res.render("populationForm")
	}
	
	else{
		let info = cities.getPopulationByState(state)
	
		if(info === undefined){
		res.render("populationView",{
		  pop: "N/A"
		
			
		})
		
		}
		
		else{
		  res.render("populationView",{
		  pop: info.pop,
		  state: info.state
		
				
		})
			
			
		}
		
	}
	
	
	
});

// Implement the JSON, XML, & HTML formats

app.get('/pop/:state', (req, res) => {
	let state = req.params.state
	
	res.format({
		'application/json':function(){
			res.json(cities.getPopulationByState(state))
			
			
		},
		
		'application/xml': function(){
			var info = cities.getPopulationByState(state)
			var zipcodexml = '<?xml version = "1.0"?>' + "\n"+  "<state-pop " +
			"state=" + info.state + ">" + "\n" + "<pop>"+ info.pop + "</pop>" +
		"\n" + "</state-pop>"
			
			
			res.type('application/xml');
			res.send(zipcodexml);
			
			
		},
		
		'text/html': function() {
			
			let info = cities.getPopulationByState(state)
			if(info === undefined ){
				
		res.render("populationView", {
			pop:"N/A",
			state: "N/A"
			
		})
	}
	
	else{
	res.render("populationView",{
		pop:info.pop,
		state: info.state
		
		
	})
	
	
	}
	
	
	},
	
	'default': function(){
		res.status(404)
		res.send("<b> - Not Found</b>")
		}
			
			
			

	
});



}
);

app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.listen(3001, () => {
  console.log('http://localhost:3001');
});




