class Person {
    firstName: string;
    lastName: string;
    Age: number;
    phoneNumber: number;
    State: string;
    zipcode: string;
    occupation: string;
    hourlyWage: number;
    workingHours: number;
    certification: string[];
  
    constructor(
      fName: string,
      lName: string,
      age?: number,
      phone?: number,
      state?: string,
      zip?: string,
      work?: string,
      wage?: number,
      cert?: string[],
      hours?: number
    ) {
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
      } else this.workingHours = 40;
    }
  
    // These methods/functions have to be within the class, since they're referring to "this"(?)
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getNumber() {
      return "This person's phone number is: " + this.phoneNumber;
    }
  
    location() {
      return "This person's location is " + this.State + " " + this.zipcode;
    }
  
    weeklyWage() {
      return (
        this.firstName +
        this.lastName +
        "'s weekly wage is: " +
        this.workingHours * this.hourlyWage
      );
    }
 
    addCerts(myArray: string[]) {
      for (let i = 0; i < myArray.length; i++) {
        this.certification.push(myArray[i]);
      }
      return this.certification.toString();
    }
  
    /*  the use of Person here is telling the compiler that this function  will return a person*/
    static createEmployee(options: EmployeeOptions): Person {
      return new Person(options.firstName, options.lastName);
    }
  }
  
  let personA = new Person(
    "George",
    "Tyler",
    52, //age
    1234567890, //phone number
    "NC",
    "28223",
    "delivery",
    12, // hourly wage
    ["MBA", "CST", "TTV"], //certification
    10 //hours worked in a week
  );
  
  let personB = new Person(
    "Lebron",
    "JAmes",
    40,
    1234567891,
    "NC",
    "28269",
    "therapist",
    80,
    ["MBA"],
    null
  );
  
  let personC = new Person(
    "Chris",
    "Paul",
    30,
    1234567891,
    "NC",
    "027101",
    "meteorologist",
    100,
    ["MBA"],
    12
  );
  
  interface EmployeeOptions {
    firstName: string;
    lastName: string;
    Age?: number;
    phoneNumber?: number;
    State?: string;
    zipcode?: string;
    occupation?: string;
    hourlyWage?: number;
    workingHours?: number;
    certification?: string[];
  }
  
  document.getElementById("div1").innerHTML = personA.getNumber();
  
  document.getElementById("div2").innerHTML =
    personB.firstName + "'s 'phone number is " + personB.phoneNumber;
  
  document.getElementById("div3").innerHTML = personC.getFullName();
  
  document.getElementById("div4").innerHTML = personA.location();
  document.getElementById("div5").innerHTML = personB.weeklyWage();
  
 
  document.getElementById("div6").innerHTML = personA.addCerts([]);
  
  let personD = {
    firstName: "Carlton",
    lastName: "Vaughn",
    Age: 29
  };
  
  document.getElementById("div7").innerHTML = Person.createEmployee(
    personD
  ).getFullName();
  

