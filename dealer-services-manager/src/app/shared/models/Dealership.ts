export class Dealership {
    DealerId : number;
    DealerName : string;
    Address : string;
    Zip : string;
    State : string;
    City : string;
    Phone : string;
    Email : string;

    constructor(DealerId : number, DealerName : string, Address : string, Zip : string, 
        State : string, City : string, Phone : string, Email : string) {
        this.DealerId = DealerId;
        this.DealerName = DealerName;
        this.Address = Address;
        this.Zip = Zip;
        this.State = State;
        this.City = City;
        this.Phone = Phone;
        this.Email = Email;
    }
}