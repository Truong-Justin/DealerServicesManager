import { Component, OnInit } from '@angular/core';
import { DealerService } from '../Dealer.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'dealerdetailscomponent',
  templateUrl: './dealerdetailscomponent.component.html',
  styleUrls: ['./dealerdetailscomponent.component.css']
})
export class DealerdetailsComponent implements OnInit {
  dealership : any = {};

  constructor(private dealerService : DealerService, private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let dealerId = params.get('dealerId');

      if (dealerId) {
        this.dealerService.getDealerById(parseInt(dealerId, 10)).subscribe((data : any) => {
          this.dealership = data})
      }
    })
  }
}
