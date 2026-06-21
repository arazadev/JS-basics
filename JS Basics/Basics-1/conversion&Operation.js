let score = "21"
let score1 = "214a"
let score2 = null
let score3 = undefined

console.log(score)

console.log(typeof score)

console.log(typeof score1)

let valueInNumber = Number(score)

let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber)

console.log(typeof valueInNumber1)

console.log(valueInNumber1)

console.log(typeof NaN)

console.log(typeof score2)

console.log(score2)

console.log(score3)

console.log(typeof score3)

let valueInNumber2 = Number(score3)

console.log(valueInNumber2)

let valueInNumber3 = Number(score2)

console.log(valueInNumber3)


/*
Mentor Github
*/
let sccore = "21";

// console.log(typeof sccore);
// console.log(typeof sccore);
// conversion of string into number
const scoreInNumber = Number(sccore);

// console.log(typeof scoreInNumber);

// console.log(scoreInNumber);

// "33" => 33
//"33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;

//conversion into boolean

let booleanIsLoogedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoogedIn);

// 1 => true; 0=> false
//"abc" => true;
//"" => false

let num = 323;
//Conversion in to string from number
let numInString = String(num);
// console.log(typeof numInString);
// console.log(numInString);


// ************************  Operation *********************

 let value =23;
 let negValue = -value;
//  console.log(negValue);


// console.log(2+5);
// console.log(2-5);
// console.log(2**5);
// console.log(2*5);
// console.log(2/5);
// console.log(2%5);



 //concatination of strings
let str1 = "Ali"
let str2 = " Raza";

let str3 = str1 + str2
// console.log(str3);


//string -> number confusion

// for more details visit https://tc39.es/ecma262/#sec-normative-references

console.log("1"+2); //12
console.log(1+"2"); // 12
console.log("1"+"2"); // 12
console.log("1"+2+2); // 122 because the first element is string
console.log(2+2+"1"); // 41  because the first element is number

console.log(true)
console.log(+true)
console.log(+"")

//prefix and postfix increment and decrement

let inc = 2
inc++;
console.log(inc);
++inc;
console.log(inc);
