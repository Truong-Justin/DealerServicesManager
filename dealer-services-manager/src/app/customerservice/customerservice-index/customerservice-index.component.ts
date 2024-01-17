import { Component, OnInit } from '@angular/core';
import { CustomerServicesService } from '../CustomerService.service';
import { CustomerService } from 'src/app/customer/Customer.service';

@Component({
  selector: 'customerservice-index',
  templateUrl: './customerservice-index.component.html',
  styleUrls: ['./customerservice-index.component.css']
})
export class CustomerserviceIndexComponent implements OnInit{
  constructor (private customerService : CustomerServicesService) { }
  customerServices! : CustomerService[];
    
  ngOnInit() : void {
    this.customerService.getCustomerServices().subscribe((data : any) => {
      this.customerServices = data;
    });
  };
}
