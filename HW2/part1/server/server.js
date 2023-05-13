const net = require('net');

const colors = require('colors');

const cities = require('./zipCodeModule_v2');

const server = net.createServer((socket) => {

	console.log("Client connection...".red);

	socket.on('end', () => {
		console.log("Client disconnected...".red);
	});

	// HW Code - Write the following code to process data from client
	
	
	
	socket.on('data', (data) => {
		
		try{

		let input = data.toString();
		console.log(colors.blue('...Received %s'), input);

		let parsed_input = input.split(",") //Split the input into array, first element for function name, second for data
	
		
		
		if(parsed_input[0].toLowerCase() == "lookupbyzipcode"){ //Make all input lower case to compensate for user error
			let info = cities.lookupByZipCode(parsed_input[1])
			socket.write(JSON.stringify(info))
			
		}
		
		else if(parsed_input[0].toLowerCase() == "lookupbycitystate"){
			let info = cities.lookupByCityState(parsed_input[1],parsed_input[2]) //Input both data into function
			socket.write(JSON.stringify(info)) //Stringify object into readable string
		}
		
		else if(parsed_input[0].toLowerCase() == "getpopulationbystate"){
			let info = cities.getPopulationByState(parsed_input[1])
			socket.write(JSON.stringify(info))
		}
		
		
		else if(parsed_input[0].toLowerCase() == "bye" || parsed_input[1].toLowerCase() == "bye"){
			socket.write("GoodBye")
		}
		
		else{ //If user enters function name wrong or only one parameter return this
			socket.write("Invalid Request")
		}
		}
		
		catch(undefined){ //Catch all invalid input
			socket.write("Input does not exist")
			
		}
		
		
		
	});

});

// listen for client connections
server.listen(4009, () => {
	console.log("Listening for connections on port 4009");
});
