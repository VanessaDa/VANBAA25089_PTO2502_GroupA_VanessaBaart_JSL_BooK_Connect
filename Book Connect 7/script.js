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
//Ternary Operator - A shorthand if statement
const k = 10;
const y = 7;
let first = (y < k) ? y : k;
console.log(first) // 7

//The components:
// (y < k) - The Expression
// '?' - The ternary operator - following is the true condition result, 'y'
// ':' - following this symbol is the false condition result, 'k'

let page = "home"
switch(page){
    case "home": {
        console.log("homepage") // 'homepage'
        break
    }
    case "about": {
        console.log("aboutpage")
        break
    }
    case "contact": {
        console.log("contactpage")
        break
    }
}
/Loops

for(let x=0; x < 5; x++){
    console.log("") // '', '', '', '', ''
}

// while(true){
//   console.log("Infinite Loop")
// }

let q = 0
while(q < 5){
    console.log("While Loop") // 'While Loop', 'While Loop', 'While Loop', 'While Loop', 'While Loop'
    q++
}

let h = 10
do {
    console.log("Always runs once") // 'Always runs once'
} while(h > 20)

//Break statement
for(let x=0;x<1000;x++){
    if(x === 5){
        break;
    }
}

//Continue statement
for(let x=0; x<10; x++){
    if(x === 5){
        continue;
    }
    console.log(x) // 0, 1, 2, 3, 4, 6, 7, 8, 9
}