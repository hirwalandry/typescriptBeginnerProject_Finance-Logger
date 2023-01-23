"use strict";
//explicity types
let character; //init string
let age; //init number
let isLoggedIn; //init boolean
let gang = []; //init array
let mixed = []; // init union types
let user; // init object
let anyVariable = []; // init any
character = "landry"; //declare string
age = 30; // declare number
isLoggedIn = true; //declare boolean
gang = ["Nshuti", "Hirwa", "landry"]; //declare array
mixed = ["landry", "22"]; //declare union types
user = { uid: "1", userName: "hirwalandry77@gmail.com" }; //declare object
anyVariable = ["landry", "22", "true"]; //declare any
console.log(`My name is ${character}77`);
console.log(age);
console.log(isLoggedIn);
console.log(gang);
console.log(mixed);
console.log(user);
console.log(anyVariable);
//function
let calc;
calc = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};
console.log(calc(2, 5));
let aggregate;
aggregate = (name, marks) => {
    if (marks >= 70 && marks <= 100) {
        return `${name} is in grade A`;
    }
    else if (marks >= 40 && marks <= 69) {
        return `${name} is in grade B`;
    }
    else if (marks > 10 && marks <= 39) {
        return `${name} is in grade C`;
    }
    else
        return `fail`;
};
console.log(aggregate("landry", 90));
let check;
check = (name) => {
    if (name === "landry") {
        return `Mr ${name}, Your welcome Sir, have a good job`;
    }
    else if (name === "georgette") {
        return `Mrs ${name}, Your welcome Madam, have a good job`;
    }
    else if (name === "julius") {
        return `Mr ${name}, Your welcome Sir, have a good job`;
    }
    else {
        return `You enter incorrect name, Please just specify name correctly??`;
    }
};
console.log(check("georgette"));
