// if

// if(true){
//     // this code will execute when it is true
// }

// if(false){
//     // this code will execute when it is false
// }

//        Comparision Operator      //
/*

< less then
> greater then
>= greter then equal to
<= less than equal to 
== comparision Operator
!= not equal to
=== it also compare the type -> called strict equal 
!==  strict not checking

 */

//      Conditional code      //
// const temperature = 34;
// if(temperature<50){
//     console.log("Temprature is less then 50");
    
// }else{
//     console.log("Temprature is greater then 50");

// }


//       Short hand notation     //

// const balance = 1000

// if(balance>500) console.log("test"); // -> semicolon is must if not use block scope

// if(balance>500) console.log("test"),console.log("test3"); -> bad practice not recomended



// Operators
//  && AND operator all conditions must be true
//  || OR operator one of all conditions must be true

// +++++++++++++++++++++++++++++++++++++++

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}