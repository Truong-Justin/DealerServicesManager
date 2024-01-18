import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/Employee';
import { EmployeeService } from 'src/app/employee/Employee.service';

@Component({
  selector: 'employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})
export class EmployeeIndexComponent implements OnInit {
  constructor (private employeeService : EmployeeService) { }
  employees! : Employee[];
    
  ngOnInit() : void {
    this.employeeService.getEmployees().subscribe((data : any) => {
      this.employees = data;
    });
  };
}
