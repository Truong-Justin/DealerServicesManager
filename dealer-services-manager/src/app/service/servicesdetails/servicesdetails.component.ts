import { Component, OnInit } from '@angular/core';
import { DealerServicesService } from '../DealerServices.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.component.html',
  styleUrls: ['./servicesdetails.component.css']
})
export class ServicesdetailsComponent implements OnInit {
  service : any = {};

  constructor(private dealerServiceService : DealerServicesService, private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let serviceId = params.get('serviceId');

      if (serviceId) {
        this.dealerServiceService.getServiceById(parseInt(serviceId, 10)).subscribe((data : any) => {
          this.service = data})
      }
    })
  }
}
