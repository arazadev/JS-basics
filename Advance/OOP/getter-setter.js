/******************************************************************
                GETTERS & SETTERS IN JAVASCRIPT
******************************************************************/

/*
==================================================================
1. WHAT ARE GETTERS & SETTERS?
==================================================================

Normally, object properties are read and written directly.

Example:

object.property       // Read
object.property = x   // Write

A getter is a function that runs whenever a property is READ.

A setter is a function that runs whenever a property is WRITTEN.

Although they are functions, they are used like normal properties.
*/


/*
==================================================================
2. NORMAL PROPERTY
==================================================================
*/

const user = {
  name: "John"
};

console.log(user.name); // Read

user.name = "Mike";     // Write

console.log(user.name);


/*
==================================================================
3. GETTER
==================================================================

The get keyword defines a getter.

It runs automatically whenever the property is accessed.
*/

const person = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName);

// Notice:
// There is NO fullName property.
// The getter calculates it every time.


/*
==================================================================
4. SETTER
==================================================================

The set keyword defines a setter.

It runs automatically whenever a value is assigned.
*/

const employee = {
  _name: "",

  set name(value) {
    this._name = value;
  }
};

employee.name = "Alice";

console.log(employee._name);


/*
==================================================================
5. WHY USE "_name"?
==================================================================

This is WRONG:

set name(value){
    this.name = value;
}

It creates an infinite loop because assigning to "name"
calls the setter again and again.

Correct approach:
*/

const student = {
  _name: "",

  set name(value) {
    this._name = value;
  },

  get name() {
    return this._name;
  }
};

student.name = "David";

console.log(student.name);


/*
==================================================================
6. VALIDATION USING A SETTER
==================================================================
*/

const account = {
  _username: "",

  set username(value) {

    if (value.length < 3) {
      console.log("Username must contain at least 3 characters.");
      return;
    }

    this._username = value;
  },

  get username() {
    return this._username;
  }
};

account.username = "Al";

account.username = "Alice";

console.log(account.username);


/*
==================================================================
7. COMPUTED PROPERTY USING A GETTER
==================================================================

A getter is commonly used when a value depends
on other properties.
*/

const rectangle = {
  width: 10,
  height: 5,

  get area() {
    return this.width * this.height;
  }
};

console.log(rectangle.area);


/*
==================================================================
8. GETTER + SETTER TOGETHER
==================================================================
*/

const customer = {
  firstName: "",
  lastName: "",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const [first, last] = value.split(" ");

    this.firstName = first;
    this.lastName = last;
  }
};

customer.fullName = "John Smith";

console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.fullName);


/*
==================================================================
9. GETTERS & SETTERS IN CLASSES
==================================================================
*/

class User {

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {

    if (value.length < 3) {
      console.log("Invalid name");
      return;
    }

    this._name = value;
  }
}

const user1 = new User("John");

console.log(user1.name);

user1.name = "Mike";

console.log(user1.name);