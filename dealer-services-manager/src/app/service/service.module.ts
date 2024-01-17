import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceIndexComponent } from './service-index/service-index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServiceIndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ServiceIndexComponent
  ]
})
export class ServiceModule { }
