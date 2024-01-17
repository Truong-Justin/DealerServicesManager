import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealerServices } from '../models/DealerServices';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DealerServicesService {
    constructor(private http : HttpClient) { }

    getServices() {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Service/GetAllServices").pipe(
            map((response : any) => { 
                return response.map((item: any) => new DealerServices(item))
            })
        );
    }

    getServiceById(serviceId : number) {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Service/GetServiceById?serviceId=${serviceId}`).pipe(
            map((response : any) => new DealerServices(response))
        )
    };
}