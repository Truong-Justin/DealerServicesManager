import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DealerIndexComponent } from './dealer-index/dealer-index.component';



@NgModule({
  declarations: [DealerIndexComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [
    DealerIndexComponent
  ]
})
export class DealershipModule { }
