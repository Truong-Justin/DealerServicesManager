export class DealerServices {
    serviceId : number;
    laborHours : number;

    constructor(data : any) {
        this.serviceId = data.serviceId;
        this.laborHours = data.laborHours;
    }
}