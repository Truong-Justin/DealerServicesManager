import { Component, OnInit } from '@angular/core';
import { DealerService } from '../Dealer.service';
import { Dealership } from '../Dealership';

@Component({
  selector: 'dealer-index',
  templateUrl: './dealer-index.component.html',
  styleUrls: ['./dealer-index.component.css']
})
export class DealerIndexComponent implements OnInit {
  constructor (private dealerService : DealerService) { }
  dealerships! : Dealership[];
    
  ngOnInit() : void {
    this.dealerService.getDealers().subscribe((data : any) => {
      this.dealerships = data;
    })
  };
}
