import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DealerService {
    constructor(private http : HttpClient) { }

    getEmployees() {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Employee/GetAllEmployees").pipe(
            map((response : any) => { 
                return response.map((item: any) => new Employee(item))
            })
        );
    }
}