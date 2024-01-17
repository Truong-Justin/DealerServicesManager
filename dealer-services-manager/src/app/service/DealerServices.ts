export class DealerServices {
    serviceId : number;
    serviceName : string;
    laborHours : number;

    constructor(data : any) {
        this.serviceId = data.serviceId;
        this.serviceName = data.serviceName;
        this.laborHours = data.laborHours;
    }
}