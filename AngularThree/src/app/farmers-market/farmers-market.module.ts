import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmersMarketComponent } from './farmers-market.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '', component : FarmersMarketComponent
      }, 
      {
        path: 'farm/:id', component: FarmersMarketComponent
      }
    ])
  ],
  declarations: [FarmersMarketComponent],
})
export class FarmersMarketModule { }
