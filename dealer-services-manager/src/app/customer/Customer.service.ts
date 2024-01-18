import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './Customer';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    constructor(private http : HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Customer/GetAllCustomers").pipe(
            map((response : any) => { 
                return response.map((item: any) => new Customer(item))
            })
        );
    }

    getCustomerById(customerId : number): Observable<Customer> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Customer/GetCustomerById?customerId=${customerId}`).pipe(
            map((response : any) => new Customer(response))
        )
    };
}