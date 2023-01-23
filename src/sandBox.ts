//explicity types
let character: string; //init string
let age: number; //init number
let isLoggedIn: boolean; //init boolean
let gang: string[] = []; //init array
let mixed: (number | string)[] = []; // init union types
let user: { uid: number | string; userName: string }; // init object
let anyVariable: any[] = []; // init any

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
let calc: (a: number, b: number) => number;
calc = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};
console.log(calc(2, 5));

let aggregate: (x: string, y: number) => string;
aggregate = (name, marks) => {
  if (marks >= 70 && marks <= 100) {
    return `${name} is in grade A`;
  } else if (marks >= 40 && marks <= 69) {
    return `${name} is in grade B`;
  } else if (marks > 10 && marks <= 39) {
    return `${name} is in grade C`;
  } else return `fail`;
};
console.log(aggregate("landry", 90));

let check: (x:string) => string
check = (name) => {
    if(name === "landry"){
        return `Mr ${name}, Your welcome Sir, have a good job`
    }
    else if(name === "georgette"){
        return `Mrs ${name}, Your welcome Madam, have a good job`
    }
    else if(name === "julius"){
        return `Mr ${name}, Your welcome Sir, have a good job`
    }
    else{
        return `You enter incorrect name, Please just specify name correctly??`
    }
}
console.log(check("georgette"));