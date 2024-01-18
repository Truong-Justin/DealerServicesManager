import { Component, OnInit } from '@angular/core';
import { DealerService } from '../Dealer.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Dealership } from '../Dealership';
import { Customer } from 'src/app/customer/Customer';
import { Employee } from 'src/app/employee/Employee';
import { CustomerService } from 'src/app/customerservice/CustomerService';

@Component({
  selector: 'dealerdetailscomponent',
  templateUrl: './dealerdetailscomponent.component.html',
  styleUrls: ['./dealerdetailscomponent.component.css']
})
export class DealerdetailsComponent implements OnInit {
  dealership! : Dealership;
  customers! : Customer[];
  employees! : Employee[];
  customerServices! : CustomerService[];

  constructor(private dealerService : DealerService, private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let dealerId = params.get('dealerId');

      if (dealerId) {
        this.dealerService.getDealerById(parseInt(dealerId, 10)).subscribe((data : any) => {
          this.dealership = data});

        this.dealerService.getCustomersForDealer(parseInt(dealerId, 10)).subscribe((data : any) => {
          this.customers = data});

        this.dealerService.getEmployeesForDealer(parseInt(dealerId, 10)).subscribe((data : any) => {
          this.employees = data});

        this.dealerService.getCustomerServicesForDealer(parseInt(dealerId, 10)).subscribe((data : any) => {
          this.customerServices = data});
      }
    })
  };
}
