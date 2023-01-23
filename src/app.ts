//imports
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";
//DOM
let anchor = document.querySelector("a");

console.log(anchor);
let form = document.querySelector("form");
console.log(form);

//typecasting
let selectType = document.querySelector("#type") as HTMLSelectElement;
let toFrom = document.querySelector("#toFrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;
let ul = document.querySelector("ul")!;

//list template instance
const listItem = new ListTemplate(ul);

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number]
  values = [toFrom.value, details.value, amount.valueAsNumber]
  let doc: HasFormatter;
  if (selectType.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  listItem.render(doc, selectType.value, "end", "remove");
});
//classes

let invoices: Invoice[] = [];
let invOne = new Invoice("nshuti", "work on nshuti project", 300);
let invTwo = new Invoice("landry", "work on landry project", 200);

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
// interface

interface isPerson {
  name: string;
  age: number;
  speak(text: string): void;
  spend(amount: number): number;
}

const me: isPerson = {
  name: "landry",
  age: 15,
  speak(text: string): void {
    console.log("hello", text);
  },
  spend(amount: number): number {
    console.log(amount);
    return amount;
  },
};
console.log(me);
// interfaces with classes

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("landry", "web work", 200000);
// docTwo = new Payment("mario", "plambing work", 200);

// let doc: HasFormatter[] = [];
// doc.push(docOne);
// doc.push(docTwo);
