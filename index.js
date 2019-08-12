// Ask the user to enter to enter an option, then go to that option (2 points):
// Example:
// "Welcome to Kenn's program. Press 1 to count. Press 2 to use a calculator. Press q to quit".

// #### When selecting count by pressing 1 (2 points):
// Ask the user to count by ones.
// - If they select count by ones, ask them to enter a number. Start at 1 and count up to that number in the console log.

// #### When selecting use a calculator by pressing 2 (2 points):
// Ask the user if they want to use addition.
// - If they select 'a', ask them to enter two numbers. Give them the sum of the numbers.

// var isvalid = false;
// while(isvalid){
// var userInput = prompt("Welcome to Marcus's program. Press 1 to count. Press 2 to use a calculator. Press q to quit.");
// 	if(userInput === 1 || userInput === 2 || userInput = q){
//           isvalid = true;
// }
//    }

//var isValid = false;

// You were on the right track. You had to expand what's in your first for loop and add the additonal userInput === 2 if statement
while(parseInt(userInput) !== 1 || parseInt(userInput) !== 2 || userInput !== "q"){
	if(userInput === 1){
	 		var answer = prompt("do you want to count by ones enter yes");
	 	}
	
    var userInput = prompt("Welcome to Marcus's program. Press 1 to count. press 2 to use a calculator. press q to quit.");
	
	 	

	 }
//}


// if(isValid === true && userInput === 1){
// 	 	var select1s = prompt(" do you want to count by ones?")
// 	 }

