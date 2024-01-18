import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerIndexComponent } from './dealership/dealer-index/dealer-index.component';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';
import { ServiceIndexComponent } from './service/service-index/service-index.component';
import { CustomerserviceIndexComponent } from './customerservice/customerservice-index/customerservice-index.component';
import { DealerdetailsComponent } from './dealership/dealerdetailscomponent/dealerdetailscomponent.component';
import { CustomerdetailsComponent } from './customer/customerdetails/customerdetails.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'dealers', component: DealerIndexComponent},
  { path: 'dealers/:dealerId', component: DealerdetailsComponent},
  { path: 'customers', component: CustomerIndexComponent},
  { path: 'customers/:customerId', component: CustomerdetailsComponent},
  { path: 'employees', component: EmployeeIndexComponent},
  { path: 'services', component: ServiceIndexComponent},
  { path: 'customerservices', component: CustomerserviceIndexComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
