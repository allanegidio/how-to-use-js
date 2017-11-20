var x = 10;
var float = 2.5;
var text = "LOL";
var numberInString = '3';
var bool =  x > float;
var answer = x + float;

console.log(typeof x);
console.log(typeof float);
console.log(typeof text);
console.log(typeof numberInString);
console.log(typeof bool);
console.log(typeof answer);

//Converts text in number to multiply.
var wrongAnswer = x + text;
console.log(wrongAnswer);
console.log(typeof wrongAnswer);

//Concat results.
var multiply = '2.5' + '3.5';
console.log(multiply);

//Convert string to number and multiply.
var multiplyString = '2.5' * '3.5';
console.log(multiplyString); 

//Multiply two strings.
var multiplyText = 'Hello' * 'Hello';
console.log(multiplyText); //Prints NaN

//Convert string to number
var result = x + parseInt(numberInString);
console.log(result);

//Prints object
console.log(typeof console);
//Prints function
console.log(typeof console.log);

//Create a simple function
var welcome = function(name) {
	console.log("Hello " + name);
	console.log(`Hello ${name}`);
}

welcome("Allan");

//Using () when variavel is not a function
//x(); 
// Prints error x is not a function
