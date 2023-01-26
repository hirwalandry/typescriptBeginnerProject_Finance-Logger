// import {HasFormatter} from "../interfaces/HasFormatter.js";
export class Payment {
    //   client: string;
    //   details: string;
    //   amount: number;
    constructor(uid, recipient, details, amount) {
        this.uid = uid;
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
