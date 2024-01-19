import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './CustomerService';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CustomerServicesService {
    constructor(private http : HttpClient) { }

    getCustomerServices(): Observable<CustomerService[]> {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/CustomerServices/GetAllCustomerServices").pipe(
            map((response : any) => { 
                return response.map((item: any) => new CustomerService(item))
            })
        );
    };

    getCustomerServiceByIds(customerId : number, serviceId : number): Observable<CustomerService> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/CustomerServices/GetCustomerServiceById?customerId=${customerId}&serviceId=${serviceId}`).pipe(
            map((response : any) => new CustomerService(response))
        );
    };
}
