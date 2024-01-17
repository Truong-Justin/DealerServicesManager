import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dealership } from '../models/Dealership';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DealerService {
    constructor(private http : HttpClient) { }

    getDealers() {
        return this.http.get("https://dealerservicesmanagerapi.azurewebsites.net/api/Dealership/GetAllDealerships").pipe(
            map((response : any) => { 
                return response.map((item: any) => new Dealership(item))
            })
        );
    }
}