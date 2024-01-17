import { Component, OnInit } from '@angular/core';
import { Dealership } from './shared/models/Dealership';
import { DealerService } from './shared/services/Dealer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private dealerService : DealerService) { }
  dealerships! : Dealership[];
    
  ngOnInit() : void {
    this.dealerService.getDealers().subscribe((data : any) => {
      this.dealerships = data;
    })
  };


}

