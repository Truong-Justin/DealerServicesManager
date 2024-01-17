import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerIndexComponent } from './customer-index/customer-index.component';



@NgModule({
  declarations: [CustomerIndexComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [
    CustomerIndexComponent
  ]
})
export class CustomerModule { }
