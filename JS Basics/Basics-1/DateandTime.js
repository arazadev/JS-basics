// Reference: https://tc39.es/proposal-temporal/docs/

let myDate = new Date(); // Creates a Date object with the current date and time

console.log(myDate.toString()); 
// Returns the full date and time as a readable string

console.log(myDate.toDateString()); 
// Returns only the date portion

console.log(myDate.toLocaleString()); 
// Returns date and time formatted according to the user's locale


// Creates a specific date: January 14, 2026
// Month index starts from 0 (0 = January, 11 = December)
let myCreatedDate = new Date(2026, 0, 14);

// console.log(myCreatedDate.toDateString());


// Creates a date from a string (MM-DD-YYYY format)
let myDate2 = new Date("08-14-2026");

console.log(myDate2.toLocaleString());
// Displays the date in locale-specific format


// Gets the current timestamp in milliseconds since January 1, 1970 (Unix Epoch)
let myTimeStamp = Date.now();

console.log(myTimeStamp);
// Current timestamp in milliseconds

console.log(myDate2.getTime());
// Timestamp of myDate2 in milliseconds


console.log(Date.now());
// Current timestamp in milliseconds

console.log(Math.floor(Date.now() / 1000));
// Converts milliseconds to seconds


let Date2 = new Date(); // Current date and time

console.log(Date2.getDay());
// Returns day of the week (0 = Sunday, 6 = Saturday)

console.log(Date2.getMonth() + 1);
// Returns month number (adding 1 because months are zero-based)


// Formats the date according to locale options
console.log(
  Date2.toLocaleString("default", {
    weekday: "narrow", // Displays weekday as a single letter (e.g., M, T, W)
    day: "2-digit",    // Displays day with two digits (e.g., 01, 14)
  })
);


// Runs repeatedly every 2 seconds
// setInterval(() => {
//     console.log("web dev mastery");
// }, 2000);


// Runs only once after 2 seconds
setTimeout(() => {
    console.log("This is example of setTimeout");
}, 2000);