import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';


@NgModule({
  declarations: [
    EmployeeIndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    EmployeeIndexComponent
  ]
})
export class EmployeeModule { }
