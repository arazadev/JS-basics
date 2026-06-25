// ES6
// constructer is automatically called when object is created

class user{
    constructor(username, email, password ){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return`${this.username.toLowerCase()}`
    }
}

const a = new user("Ali", "ali@fb.com", "124")
console.log(a.changeUsername())
console.log(a.encryptPassword())

// Behind The Scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const b = new User("Raza", "tea@gmail.com", "123")

console.log(b.encryptPassword());
console.log(b.changeUsername());