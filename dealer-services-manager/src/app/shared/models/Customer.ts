export class Customer {
    customerId : number;
    firstName : string;
    lastName : string;
    address : string;
    zip : string;
    state : string;
    city : string;
    phone : string;
    dealerId : number;

    constructor(data : any) {
        this.customerId = data.customerId;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.address = data.address;
        this.zip = data.zip;
        this.state  = data.state;
        this.city = data.city;
        this.phone = data.phone;
        this.dealerId = data.dealerId;
        }
}