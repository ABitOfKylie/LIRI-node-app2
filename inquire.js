var inquirer = require ('inquirer');

// var userName = process.argv [2];
// 		console.log(userName);


inquirer.prompt([

	{
		type:"input",
		name: "userName",
		message: "What is your name?"

	},
	{
		type:"list",
		name: "userChooses",
		message: "Ok, wish I could pull your name from previous answer ,what would you like to search for",
		choices: ["movie","song","tweets"]
	},


	{
		type:"confirm",
		message: "Is that your final answer (Y/n)?",
		name: "confirm",
		default: true
	}

	]).then(function (user){
		console.log(JSON.stringify(user,null, 2));
});
		// if (user.confirm){
			
	// 		console.log("I wonder if you can call a function that runs spotify query?");
	// 	}
	// 	else {
	// 		console.log("************");
	// 		console.log("If you won't read my tweets, then no info treats for you!");
	// 		console.log("************");
	// 	}
	// });