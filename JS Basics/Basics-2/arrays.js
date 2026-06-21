// Arrays -> each element in array is element
// Array can be different dataTypes
// JS arrays are resizable -> Dymanically

//Methods of Declaration of Array
let arr = [2, 3, 5, 7, 4];
const myHeros = ["a", "b"];
const arr1 = new Array(1, 2, 3, 4);

// Shallow & Deep copies

//    Array Mehods   //

arr.push(9);
arr.push(1); // add element to array
console.log(arr);

arr.pop(); // Remove Last element
arr.unshift(9); // adding element to first
arr.shift(); // remove the first element

console.log(arr.indexOf(2)); // gives the index

const newArr = arr.join(); // converts array in string

console.log(arr);
console.log(newArr);

// slice , splice
// important for interview
// splice -> changes the original array

// for more methods and other array related visit mdn docs

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);