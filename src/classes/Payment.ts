// import {HasFormatter} from "../interfaces/HasFormatter.js";
export class Payment{
    //   client: string;
    //   details: string;
    //   amount: number;
  
    constructor(
      private uid: number,
      readonly recipient: string,
      private details: string,
      public amount: number
    ) {}
    format() {
      return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
  }

