import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Customer.service';
import { Customer } from '../Customer';

@Component({
  selector: 'customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit{
  constructor (private customerService : CustomerService) { }
  customers! : Customer[];
    
  ngOnInit() : void {
    this.customerService.getCustomers().subscribe((data : any) => {
      this.customers = data;
    })
  };
}
