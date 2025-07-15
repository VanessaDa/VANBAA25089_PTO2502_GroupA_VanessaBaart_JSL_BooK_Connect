{
//Arrays are compound datatypes meaning they can store multiple values.

const arr = [1, 2, 3];

//Add an element to the end of an array
arr.push("Hello");
console.log(arr); // [1, 2, 3, 'Hello']

//Remove an element from the end
arr.pop();
console.log(arr); // [1, 2, 3]

//Add an element to the start of an array
arr.unshift("Hello");
console.log(arr); // ['Hello', 1, 2, 3]

//Remove an element from the start
arr.shift();
console.log(arr); // [1, 2, 3]

//Concatenate (join together) 2 or more arrays
const arr2 = [4, 5, 6];
let arr3 = arr.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

//Concat 3 arrays
const arr4 = arr.concat(arr2, arr3);
console.log(arr4); // [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
}
// Get the length of an array
console.log(arr3.length); // 6

// Flatten array
const multiArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(multiArr.flat()); // [1, 2, 3, 4, 5, 6]

// Slice array to get part
console.log(arr4.slice(4)); // Sliced from the 5th element
// Looping through arrays
let arr = [1, 2, 3, 4];

// forEach method
arr.forEach((element) => {
  console.log(element); // 1, 2, 3, 4
});

// map method also runs 1 time for each element but also returns a
// new array with values mapped from the original array
const newArray = arr.map((element) => {
  return element + 5;
});

console.log(newArray); // [6, 7, 8, 9]

// Accessing array members – Remember arrays are zero indexed
console.log(arr[0]); // 1
console.log(arr[4]); // undefined
console.log(arr[5]); // undefined

// Objects are also compound data types but instead of storing only values
// They store key-value pairs
let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: 100,
  key5: [1, 2],
  key6: {
    subKey1: "subValue1",
  },
};

// Accessing object values
console.log(obj["key1"]); // 'value1'
console.log(obj.key1);    // 'value1'

// Accessing object values
console.log(obj["key1"]); // 'value1'
console.log(obj.newObj);  // { subKey1: 'subValue1' }

// Accessing all keys
console.log(Object.keys(obj)); 
// ['key1', 'key2', 'string', 'key4', 'newArr', 'newObj']

// Accessing all values
console.log(Object.values(obj)); 
// ['value1', 'value2', 'value3', 100, [1, 2], { subKey1: 'subValue1' }]

import { authors, genres, books } from "../data.mjs";

// Bringing it together to access elements from bookConnect data
const bookConnectData = [authors, genres, books];
console.log(bookConnectData);

// Now we want to access all the author names in the dataset.
// First we need to access the 'authors' object.
let authorsObject = bookConnectData[0]; // gives us the authors object from the array

// Next we want all of the names which are values in the object
let values = Object.values(authorsObject);
console.log(values);

// Copying arrays and objects
// Arrays and objects are stored differently to simple datatypes like strings and numbers.

// Strings and numbers are stored as values
const x = 5;
const y = 5;
console.log(x === y); // true

// Arrays and objects are stored as references
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

const arr3 = arr1;
arr3.push("hello");
console.log(arr1); // [1, 2, 'hello']

// How to copy arr1?
const arr4 = [...arr1];
arr4.push("goodbye");
console.log(arr1); // [1, 2, 'hello']

// Multi-dimensional Arrays
const multiArray = [1, 2, 3, [1, 2, 3]];
const arr5 = multiArray;
arr5[3].push("hello");
console.log(multiArray); // [1, 2, 3, [1, 2, 3, 'hello']]

const arr6 = [...multiArray];
arr6[3].push("goodbye");
console.log(multiArray); // [1, 2, 3, [1, 2, 3, 'hello', 'goodbye']]

// How to do a deep copy then?
const clone = JSON.parse(JSON.stringify(multiArray));
clone[3].push("GoodAfternoon");
console.log(multiArray); // remains unaffected

// Other ways:
// Reliable cloning using a library
// Since cloning objects is not trivial (complex types, circular references, functions etc.),
// most major libraries provide functions to clone objects.
// Don't reinvent the wheel - if you're already using a library,
// check if it has an object cloning function. For example:

// lodash - cloneDeep; can be imported separately via the lodash.clonedeep module
// Ramda - clone
// AngularJS - angular.copy
// jQuery - jQuery.extend(true, {}, oldObject); .clone() only clones DOM elements

// Destructuring

// Arrays
const people = ["Jeff", "Geoff", "Djef"];
const [person25, person2, person3] = people;
console.log(person25); // 'Jeff'

// Objects
const jobHours = {
  office: "9am-5pm",
  fisherman: "5am-9pm",
  DeptofHomeAffairs: "10am-4pm",
};

const { office, fisherman, DeptofHomeAffairs } = jobHours;
console.log(DeptofHomeAffairs); // '10am-4pm'

// Functions
function getUniqueId() {
  return new Date().now(); // ❗ Should be: Date.now()
}

const createSchedule = (creator, workHours, leisureHours) => {
  return {
    id: getUniqueId(),
    creator: creator,
    workHours: workHours,
    leisureHours: updateLeisureHours(leisureHours),
  };
};

// Methods
function updateLeisureHours(leisureHours) {
  const newHours = "10pm";
  const updatedHours = leisureHours.slice(0, -4) + newHours;
  return updatedHours;
}

updateLeisureHours("8pm-10am");

console.log(newSchedule);
// Example output: { id: 1744281592903, creator: 'Che', workHours: '9am-5pm', leisureHours: '5pm - 10pm' }

// Methods
function updateLeisureHours(leisureHours) {
  const newHours = "10pm";
  const updatedHours = leisureHours.slice(0, -4) + newHours;
  return updatedHours;
}

updateLeisureHours("8pm-10am");

// Prototypes
String.prototype.replaceFrom = function (index, replacement) {
  return this.substring(0, index) + replacement;
};
let leisureHours = "5pm - 12pm";
const newLeisureHours = leisureHours.replaceFrom(leisureHours.length - 4, "10pm");
console.log(newLeisureHours); // '5pm - 10pm'