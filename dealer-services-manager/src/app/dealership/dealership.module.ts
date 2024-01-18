import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DealerIndexComponent } from './dealer-index/dealer-index.component';
import { DealerdetailsComponent } from './dealerdetailscomponent/dealerdetailscomponent.component';
import { RouterModule } from '@angular/router';
import { DealerRoutingModule } from './dealer-routing.module';




@NgModule({
  declarations: [
    DealerIndexComponent,
    DealerdetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DealerRoutingModule,
    RouterModule
  ]
})
export class DealershipModule { }
