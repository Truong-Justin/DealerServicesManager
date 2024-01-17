import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DealerService {
    constructor(private http : HttpClient) { }

    getCustomers() {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Customer/GetAllCustomers").pipe(
            map((response : any) => { 
                return response.map((item: any) => new Customer(item))
            })
        );
    }

    getEmployeeById(customerId : number) {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Customer/GetCustomerById?customerId=${customerId}`).pipe(
            map((response : any) => new Customer(response))
        )
    };
}