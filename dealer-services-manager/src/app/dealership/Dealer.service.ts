import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dealership } from './Dealership';
import { Observable, map } from 'rxjs';
import { Customer } from '../customer/Customer';
import { Employee } from '../employee/Employee';
import { CustomerService } from '../customerservice/CustomerService';

@Injectable({
    providedIn: 'root'
})

export class DealerService {
    constructor(private http : HttpClient) { }

    getDealers(): Observable<Dealership[]> {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Dealership/GetAllDealerships").pipe(
            map((response : any) => { 
                return response.map((item: any) => new Dealership(item))
            })
        );
    };

    getDealerById(dealerId : number): Observable<Dealership> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Dealership/GetDealershipById?dealershipId=${dealerId}`).pipe(
            map((response : any) => new Dealership(response))
        );
    };
    
    getCustomersForDealer(dealerId : number): Observable<Customer[]> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Dealership/GetCustomersForDealership?dealershipId=${dealerId}`).pipe(
            map((response : any) => {
                return response.map((item : any) => new Customer(item))
            })
        );
    };

    getEmployeesForDealer(dealerId : number) : Observable<Employee[]> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Dealership/GetEmployeesForDealership?dealershipId=${dealerId}`).pipe(
            map((response : any) => {
                return response.map((item : any) => new Employee(item))
            })
        );
    };

    getCustomerServicesForDealer(dealerId : number) : Observable<CustomerService[]> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Dealership/GetCustomerServicesForDealer?dealershipId=${dealerId}`).pipe(
            map((response : any) => {
                return response.map((item : any) => new CustomerService(item))
            })
        )
    };


}