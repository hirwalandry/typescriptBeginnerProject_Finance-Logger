export class Invoice {
    //   client: string;
    //   details: string;
    //   amount: number;
    constructor(uid, client, details, amount) {
        this.uid = uid;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
