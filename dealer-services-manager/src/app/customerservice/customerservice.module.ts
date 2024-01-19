import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomerserviceIndexComponent } from './customerservice-index/customerservice-index.component';
import { RouterModule } from '@angular/router';
import { CustomerservicedetailsComponent } from './customerservicedetails/customerservicedetails.component';


@NgModule({
  declarations: [
    CustomerserviceIndexComponent,
    CustomerservicedetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CustomerserviceIndexComponent
  ]
})
export class CustomerserviceModule { }
