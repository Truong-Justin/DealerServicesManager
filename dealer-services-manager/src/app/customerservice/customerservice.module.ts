import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerserviceIndexComponent } from './customerservice-index/customerservice-index.component';



@NgModule({
  declarations: [
    CustomerserviceIndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CustomerserviceIndexComponent
  ]
})
export class CustomerserviceModule { }
