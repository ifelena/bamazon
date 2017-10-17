var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	//Your username
	user: "root",

	//Your password
	password: "",
	database: "bamazon_DB" // MUST CREATE DATABASE
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Connect to the mysql server and sql database
connection.connect(function(err){
	if (err) throw err;
	// run the start function after the connection is made to prompt the users
	start();
});

function start() {
	// On start display all of the items available for sale. 
	connection.query("SELECT * FROM bamazon_DB", function(err, res) {
		if (err) throw err;

		inquirer
			.prompt([
			{
				name: "choice",
				type: "rawlist",
				choices: function() {
					var choiceArray = [];
					for (var i = 0; i < results.length; i++) {
						choiceArray.push(results[i].item_name);
					}
					return choiceArray;
				}
				idAndUnits();
			}]);
		});
	}	
}
//Include the ids, names, and prices of products for sale
function 'idAndUnits() {
	inquirer
		.prompt([
		{
			name: "id",
			type: "input",
			message: "What is the ID for the product you would like to buy?",	
		},
		{
			name: "units",
			type: "input",
			message: "How many units?",
			validate: function(value) {
		 		if (isNaN(value) === false) {
		 			return true;
		 		}
		 		 return false;
			}
		}			
	]);
}; 		


