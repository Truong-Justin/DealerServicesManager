import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dealership } from './Dealership';
import { Observable, map } from 'rxjs';

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
    }

    getDealerById(dealerId : number): Observable<Dealership> {
        return this.http.get(`https://dealerservicesmanagerapi.azurewebsites.net/api/Dealership/GetDealershipById?dealershipId=${dealerId}`).pipe(
            map((response : any) => new Dealership(response))
        )
    };


}