import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealershipModule } from './dealership/dealership.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { ServiceModule } from './service/service.module';
import { CustomerserviceModule } from './customerservice/customerservice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DealershipModule,
    CustomerModule,
    EmployeeModule,
    ServiceModule,
    CustomerserviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
