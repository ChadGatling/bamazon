var mysql = require('mysql');
var inquirer = require('inquirer');

var IDToPurchase = 0;

function stringify(string) {
    return JSON.stringify(string, null, 1);
}

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password,
    password: "jQB0#NCaXMWkjDXBP51zKR2TGs7GM0ZEN6!hBuRlNyxE@!P%yUNFWiS#Bq&7!cKTwQ@UIxcSGk3f4cbN71feXvaRrr3#cpnMzc4D",
    database: "bamazon"
});

// --------------------------------------------------------------------------------------------------------------------------

function adjustQuantities(answers, results) {
    console.log("Adjusting Quantities", results[0].stock_quantity - parseInt(answers.amount));
    connection.query("UPDATE products SET ? WHERE ?",
	[
    	{
    		stock_quantity: results[0].stock_quantity - parseInt(answers.amount)
    },{
    		item_id: answers.id
    	}
    ] , function (error, results) {
    	// body...
    });
    productList();
}

function makePurchase(answers) {
    connection.query("SELECT * FROM products WHERE ? ", [{
            item_id: answers.id
        }],
        function(error, results) {

            if (error) throw error;

            if (parseInt(results[0].stock_quantity) >= parseInt(answers.amount)) {
            	console.log("\nCongratulations you bought some crap.");
            	adjustQuantities(answers, results);
            } else if (parseInt(results[0].stock_quantity) < parseInt(answers.amount)) {
            	console.log("\nSorry there are not enough units.");
            	productList();
            } else {
            	console.log("You fucked up.")
            }
        });
}

function userAction() {
    inquirer.prompt([{
        name: "id",
        message: "Please enter the ID of the item you would like to buy."
    }, {
        name: "amount",
        message: "How many would you like to buy?"
    }]).then(function(answers) {
        makePurchase(answers);
    });
}

function continueOrExit() {
	inquirer.prompt([{
		type: "confirm",
        name: "continue",
        message: "Would you like to continue?"
    }]).then(function(answers) {
    	if (answers.continue) {
    		userAction();
    	} else if (!answers.continue) {
    		console.log("\nEnding session.")
    		connection.end();
    	} else {
    		console.log("\nYou fucked up.")
    	}
    });
}

function productList() {

	connection.query("SELECT * FROM products", function(error, results) {
	    console.log("\nITEM ID   " + "PRODUCT                       " + "PRICE");

	    for (var i = 0; i < results.length; i++) {
	        console.log(results[i].item_id.toString().padEnd(10, ".") + results[i].product_name.padEnd(30, ".") + results[i].price.toString());
	    }
	    console.log("");
	    continueOrExit();
	});
}

// --------------------------------------------------------------------------------------------------------------------------

connection.connect(function(error) {

    if (error) throw error;
    console.log("connected as id " + connection.threadId);
    productList();
});