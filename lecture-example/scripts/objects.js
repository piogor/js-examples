var johnDoe = { firstName: "John", lastName: "Doe", age: 21 }

var janNowak = {
    firstName: "Jan",
    lastName: "Nowak",
    age: 21
}

var evaThefirst = new Object();
evaThefirst.firstName = "Ewa";
evaThefirst["lastName"] = "First"
ewaThefirst.age = 2015 - (-4150)


function Person(fName,lName,aGe) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = aGe;
    this.name = function () {
        return this.firstName + " " + this.lastName;
    };
}

var adamThefirst = new Person("Adam", "First", 4150);

var evaThefirst = new Person("Ewa", "First", 4150);

console.log(evaThefirst.name() + " lived with " + adamThefirst.name() + " in Paradise.");

var tmp = {};
Person.call(tmp, "Albert", "Einstain", 54);
var albertEinstain = tmp;
// the above is the same as var albertEinstain =  new Person("Albert", "Einstain", 54);

Person("globalJohn", "globalDoe", 10);

if (firstName == window.firstName && lastName == window.lastName && age == window.age) {
    alert("Global scope is the same as the global window object: " + firstName + " " + window.lastName);
} else {
    alert("I don't know what global scope is!")
}

janNowak.name = function () {
    return this.firstName + " " + this.lastName;
}

alert(janNowak.name());


