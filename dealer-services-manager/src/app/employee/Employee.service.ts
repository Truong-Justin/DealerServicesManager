import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    constructor(private http : HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Employee/GetAllEmployees").pipe(
            map((response : any) => { 
                return response.map((item: any) => new Employee(item))
            })
        );
    }

    getEmployeeById(employeeId : number): Observable<Employee> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Employee/GetEmployeeById?employeeId=${employeeId}`).pipe(
            map((response : any) => new Employee(response))
        )
    };
}