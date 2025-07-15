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