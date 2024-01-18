export class CustomerService {
    dealerName : string;
    serviceId : number;
    customerId : number;
    firstName : string;
    lastName : string;
    serviceName : string;
    laborHours : number;
    date : string;
    isComplete : boolean;

    constructor(data : any) {
        this.dealerName = data.dealerName;
        this.serviceId = data.serviceId;
        this.customerId = data.customerId;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.serviceName = data.serviceName;
        this.laborHours = data.number;
        this.date = data.date;
        this.isComplete = data.isComplete;
    }
}