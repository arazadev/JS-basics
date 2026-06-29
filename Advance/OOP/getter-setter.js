/******************************************************************
                GETTERS & SETTERS
******************************************************************/

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}hitesh`;
    }

    set password(value) {
        this._password = value;
    }
}

const hitesh = new User("h@hitesh.ai", "abc");

console.log(hitesh.email);     // H@HITESH.AI
console.log(hitesh.password);  // abchitesh


// ================================================================
// 1. CONSTRUCTOR
// ================================================================

/*
When an object is created:

new User("h@hitesh.ai", "abc")

constructor executes first.

this.email = email
→ Calls email setter

this.password = password
→ Calls password setter
*/


// ================================================================
// 2. SETTER
// ================================================================

/*
Setter runs whenever a value is assigned.

Syntax:

user.email = "abc@gmail.com"

↓

set email(value)

↓

this._email = value
*/


// ================================================================
// 3. GETTER
// ================================================================

/*
Getter runs whenever a property is accessed.

Syntax:

console.log(user.email)

↓

get email()

↓

return this._email.toUpperCase()
*/


// ================================================================
// 4. WHY "_email"?
// ================================================================

/*
Wrong:

set email(value){
    this.email = value;
}

This creates an infinite loop because assigning
to "email" calls the setter again.

Correct:

this._email = value;

"_email" is simply an internal storage property.
*/


// ================================================================
// 5. WHAT IS STORED?
// ================================================================

/*
After object creation:

{
    _email: "h@hitesh.ai",
    _password: "abc"
}

Notice:

There are no actual "email" or "password"
properties stored.

Only _email and _password store data.
*/


// ================================================================
// 6. EMAIL GETTER
// ================================================================

/*
Stored:

"h@hitesh.ai"

Returned:

"H@HITESH.AI"

Getter formats the value before returning it.

Original value remains unchanged.
*/


// ================================================================
// 7. PASSWORD GETTER
// ================================================================

/*
Stored:

abc

Returned:

abchitesh

Getter modifies only the returned value,
not the stored value.
*/
