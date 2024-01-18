import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerIndexComponent } from './dealer-index/dealer-index.component';
import { DealerdetailsComponent } from './dealerdetailscomponent/dealerdetailscomponent.component';

const routes: Routes = [
    { path: 'dealers', component: DealerIndexComponent},
    { path: 'dealers/:dealerId', component: DealerdetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DealerRoutingModule { }