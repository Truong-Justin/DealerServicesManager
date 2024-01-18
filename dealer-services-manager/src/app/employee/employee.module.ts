import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmployeeIndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    EmployeeIndexComponent
  ]
})
export class EmployeeModule { }
