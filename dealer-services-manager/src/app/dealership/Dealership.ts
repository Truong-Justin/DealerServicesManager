export class Dealership {
    dealerId : number;
    dealerName : string;
    address : string;
    zip : string;
    state : string;
    city : string;
    phone : string;
    email : string;

    constructor(data : any) {
        this.dealerId = data.dealerId;
        this.dealerName = data.dealerName;
        this.address = data.address;
        this.zip = data.zip;
        this.state = data.state;
        this.city = data.city;
        this.phone = data.phone;
        this.email = data.email;
    }
}