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

// Use the employee module
const cities = require('./mongo_zipCodeModule_v2');

// GET request to the homepage

app.get('/', function (req, res){
	res.render('homeView');
});

app.get('/zip', async function(req, res) {
	if (req.query.id) {
		let id = req.query.id;
		let result = await cities.lookupByZipCode(id);
		res.render('lookupByZipView', result);
	} else {
		res.render('lookupByZipForm');
	}
});

app.post('/zip', async function(req, res) {
	let id = req.body.id;
	let result = await cities.lookupByZipCode(id);
	res.render('lookupByZipView', result);
});


app.get('/zip/:id', async function(req, res) {
	let id = req.params.id;
	let result = await cities.lookupByZipCode(id);

	res.format({

		'application/json': function() {
			res.json(result);
		},

		'application/xml': function() {
			let resultXml = 
				'<?xml version="1.0"?>\n' +
						'<zipCode id="' + result._id + '">\n' + 
						'   <city>' + result.city + '</city>\n' + 
						'   <state>' + result.state + '</state>\n' + 	
						'   <pop>' + result.pop + '</pop>\n' + 				 
						'</zipCode>\n';
					
			
			res.type('application/xml');
			res.send(resultXml);
		},

		'text/html': function() {
			res.render('lookupByZipView', result);

		}
		
		});
	});



// Complete the code for the following

app.get('/city', async function(req, res){
	let city = req.query.city
	let state= req.query.state
	let result = await cities.lookupByCityState(city,state);
	
	
	
	if(result.state === undefined || result.city === undefined){
		res.render('lookupByCityStateForm');
		
		
	}
	
	else{
	res.render('lookupByCityStateView',result)
		
		
			
	}
	
	
});

app.post('/city', async function(req, res){
	let city = req.body.city
	let state= req.body.state //Get input data from user
	const result = await cities.lookupByCityState(city,state);
	
	

	res.render('lookupByCityStateView', result)
	
	
});

app.get('/city/:city/state/:state', async function(req, res) {
	var city = req.params.city
	var state = req.params.state
	var result = await cities.lookupByCityState(city,state)
	
	res.format({
		'application/json':function(){//Return json format
			res.json(result)
			
			
		},
		
		'application/xml': function(){//returs xml format
			var info = result
			var zipcodexml = '<?xml version = "1.0"?>' + "\n"+  "<city-state " +
			'city= "' + info.city + '" ' + 'state= "'+ //show the correct data to the screen with format
			info.state + '">' + "\n" + '<entry: "' + JSON.stringify(info.data) +'"entry/>' +
		"\n"+"</city-state>"
			
			
			res.type('application/xml');
			res.send(zipcodexml);
			
			
		},
		
		'text/html': function() {
			let info = result
			if(info === undefined ){
				
		res.render("lookupByCityStateView", {
			code: "NULL",
			city: "N/A",
			state: "N/A"
			
		})
	}
	
	else{
	res.render("lookupByCityStateView", result)
	
	
	}
			
			},
			
			
			
			'default': function(){
				res.status(404)
				res.send("<b> - Not Found</b>")
			}
		
		
		
		});
	

		
});

app.get('/pop', async function(req, res) {
	let state = req.query.state
	
	if(state === undefined){
	res.render("populationForm")
	}
	
	else{
		let info = await cities.getPopulationByState(state)
	
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
	


app.get('/pop/:state', async function(req, res)  {
	let state = req.params.state
	var result = await cities.getPopulationByState(state)
	
	res.format({
		'application/json':function(){
			res.json(result)
			
			
		},
		
		'application/xml': function(){
			var info = result
			var zipcodexml = '<?xml version = "1.0"?>' + "\n"+  "<state-pop " +
			"state=" + info.state + ">" + "\n" + "<pop>"+ info.pop + "</pop>" +
		"\n" + "</state-pop>"
			
			
			res.type('application/xml');
			res.send(zipcodexml);
			
			
		},
		
		'text/html': function() {
			
			let info = result
			if(info === undefined ){ //If info is undefined return no pop or state
				
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
			
			
	
	
	})
	
	
	
	
});
	
	


app.use(function(req, res) {
	res.status(404);
	res.render('404');
});




app.listen(3000, function() {
  console.log('http://localhost:3000');
  
});






