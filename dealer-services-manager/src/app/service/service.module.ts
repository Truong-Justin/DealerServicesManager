import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceIndexComponent } from './service-index/service-index.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServicesdetailsComponent } from './servicesdetails/servicesdetails.component';



@NgModule({
  declarations: [
    ServiceIndexComponent,
    ServicesdetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ServiceIndexComponent
  ]
})
export class ServiceModule { }
