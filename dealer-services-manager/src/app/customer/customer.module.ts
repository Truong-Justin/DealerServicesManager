import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';




@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerdetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports : [
    CustomerIndexComponent
  ]
})
export class CustomerModule { }
