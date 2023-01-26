import {HasFormatter} from "../interfaces/HasFormatter.js";
export class Invoice implements HasFormatter{
    //   client: string;
    //   details: string;
    //   amount: number;
  
    constructor(
      private uid: number,
      readonly client: string,
      private details: string,
      public amount: number
    ) {}
    format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }
