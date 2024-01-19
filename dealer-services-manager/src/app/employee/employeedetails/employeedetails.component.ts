import { Component } from '@angular/core';
import { EmployeeService } from '../Employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {
  employee! : Employee;

  constructor(private employeeService : EmployeeService, private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let employeeId = params.get('employeeId');

      if (employeeId) {
        this.employeeService.getEmployeeById(parseInt(employeeId, 10)).subscribe((data : any) => {
          this.employee = data})
      }
    })
  }

  deleteEmployee(employeeId : number) {
    this.employeeService.deleteEmployeeById(employeeId);
  }
}
