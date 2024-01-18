import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';
import { ServiceIndexComponent } from './service/service-index/service-index.component';
import { CustomerserviceIndexComponent } from './customerservice/customerservice-index/customerservice-index.component';
import { CustomerdetailsComponent } from './customer/customerdetails/customerdetails.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { ServicesdetailsComponent } from './service/servicesdetails/servicesdetails.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./dealership/dealership.module').then(m => m.DealershipModule)},  
  { path: 'customers', component: CustomerIndexComponent},
  { path: 'customers/:customerId', component: CustomerdetailsComponent},
  { path: 'employees', component: EmployeeIndexComponent},
  { path: 'employees/:employeeId', component: EmployeedetailsComponent},
  { path: 'services', component: ServiceIndexComponent},
  { path: 'services/:serviceId', component: ServicesdetailsComponent},
  { path: 'customerservices', component: CustomerserviceIndexComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
