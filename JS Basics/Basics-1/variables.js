const accountId = 123; // never changed
let accoutnName = "Ali"; // can be changed

accoutnName = "Ali Raza";

//account name is changed

var accountType = "Savings";

// prefer not to use the var because of issue in block and functional scope

accountCity = "Lahore";

// It resrve the memory but it is not the best way to declare a variable

let accoutnBalance; // It is undefined because it has no value

console.table([accountId, accountType, accoutnBalance, accoutnName]);

// console.table prints the table of all the values

// Prefer to use only const and let