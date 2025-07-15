//Expressions and Statements
let count = 5; //let count = is a statement which is used to define
               //a variable named 'count' while '5' is an expression

//Examples of expression
5 * 5;
5 < 15;
false;

{
//Conditional and Logical operators
let x = 10;
if (x > 6) {
    //Do something
}
//Otherwise continue

//Conditional Operators
console.log(x == "10");   // true
console.log(x === "10");  // false
console.log(x != "10");   // true
console.log(x > 6);       // true
console.log(x < 6);       // false
console.log(x >= 10);     // true
console.log(x <= 10);     // true
}

//Comparing Different Types
//When comparing a string with a number, JavaScript will
//convert the string to a number when doing the comparison.
// An empty string converts to 0. A non-numeric string converts
// to NaN which is always false.
console.log(5 > "");         // true
console.log(5 > "Code");     // false
console.log(5 < "Code");     // false
console.log("5" > "6");      // false
console.log("5" < "6");      // true

//Conditional Logic Continued
let y = 5;
if(y > 6){
    //Do something
}
else {
    //Do something else
}

//More conditional statements
let x = "first";
if(x === "third"){
    console.log("this line ran")
}
else if (x === "second") {
    console.log("this line ran")
}
else if (x === "first") {
    console.log("this line ran") // 'this line ran'
}
