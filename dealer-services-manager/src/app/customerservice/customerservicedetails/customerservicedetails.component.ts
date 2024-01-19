import { Component, OnInit } from '@angular/core';
import { CustomerServicesService } from '../CustomerService.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../CustomerService';

@Component({
  selector: 'app-customerservicedetails',
  templateUrl: './customerservicedetails.component.html',
  styleUrls: ['./customerservicedetails.component.css']
})
export class CustomerservicedetailsComponent implements OnInit{
  customerService! : CustomerService;

  constructor(private customerServices: CustomerServicesService, private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let customerId = params.get('customerId');
      let serviceId = params.get('serviceId');

      if (customerId && serviceId) {
        this.customerServices.getCustomerServiceByIds(parseInt(customerId, 10), parseInt(serviceId, 10)).subscribe((data : any) => {
          this.customerService = data})
      }
    });
  };
}
