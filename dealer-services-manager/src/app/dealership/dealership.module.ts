import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DealerIndexComponent } from './dealer-index/dealer-index.component';
import { DealerdetailsComponent } from './dealerdetailscomponent/dealerdetailscomponent.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    DealerIndexComponent,
    DealerdetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports : [
    DealerIndexComponent
  ]
})
export class DealershipModule { }
