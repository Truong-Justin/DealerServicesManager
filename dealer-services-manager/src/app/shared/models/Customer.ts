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

    constructor(customerId : number, firstName : string, lastName : string, address : string,
        zip : string, state : string, city : string, phone : string, dealerId : number) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.zip = zip;
        this.state  = state;
        this.city = city;
        this.phone = phone;
        this.dealerId = dealerId;
        }
}