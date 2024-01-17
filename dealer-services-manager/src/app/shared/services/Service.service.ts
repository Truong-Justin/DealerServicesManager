import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../models/Service';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DealerService {
    constructor(private http : HttpClient) { }

    getEmployees() {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Service/GetAllServices").pipe(
            map((response : any) => { 
                return response.map((item: any) => new Service(item))
            })
        );
    }
}