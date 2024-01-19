import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Customer.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  customer! : Customer;

  constructor(private customerService : CustomerService, private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let customerId = params.get('customerId');

      if (customerId) {
        this.customerService.getCustomerById(parseInt(customerId, 10)).subscribe((data : any) => {
          this.customer = data})
      }
    })
  }
}
