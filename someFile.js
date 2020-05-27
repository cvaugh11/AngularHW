var Person = /** @class */ (function () {
    function Person(fName, lName, age, phone, state, zip, work, wage, cert, hours) {
        this.firstName = fName;
        this.lastName = lName;
        this.Age = age;
        this.phoneNumber = phone;
        this.State = state;
        this.zipcode = zip;
        this.occupation = work;
        this.hourlyWage = wage;
        this.certification = cert;
        if (hours) {
            this.workingHours = hours;
        }
        else
            this.workingHours = 40;
    }
    // These methods/functions have to be within the class, since they're referring to "this"(?)
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getNumber = function () {
        return "This person's phone number is: " + this.phoneNumber;
    };
    Person.prototype.location = function () {
        return "This person's location is " + this.State + " " + this.zipcode;
    };
    Person.prototype.weeklyWage = function () {
        return (this.firstName +
            this.lastName +
            "'s weekly wage is: " +
            this.workingHours * this.hourlyWage);
    };
    Person.prototype.addCerts = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            this.certification.push(myArray[i]);
        }
        return this.certification.toString();
    };
    /*  the use of Person here is telling the compiler that this function  will return a person*/
    Person.createEmployee = function (options) {
        return new Person(options.firstName, options.lastName);
    };
    return Person;
}());
var personA = new Person("George", "Tyler", 52, //age
1234567890, //phone number
"NC", "28223", "delivery", 12, // hourly wage
["MBA", "CST", "TTV"], //certification
10 //hours worked in a week
);

var personB = new Person("Lebron", "IJames", 40, 1234567891, "NC", "27101", "therapist", 80, ["MBA"], null);
var personC = new Person("Chris", "Paul", 30, 1234567891, "NC", "28269", "meteorologist", 100, ["MBA"], 12);
document.getElementById("div1").innerHTML = personA.getNumber();
document.getElementById("div2").innerHTML =
    personB.firstName + "'s 'phone number is " + personB.phoneNumber;
document.getElementById("div3").innerHTML = personC.getFullName();
document.getElementById("div4").innerHTML = personA.location();
document.getElementById("div5").innerHTML = personB.weeklyWage();
document.getElementById("div6").innerHTML = personA.addCerts([]);
var personD = {
    firstName: "Carlton",
    lastName: "Vaughn",
    Age: 29
};
document.getElementById("div7").innerHTML = Person.createEmployee(personD).getFullName();