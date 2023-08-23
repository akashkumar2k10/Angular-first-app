import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickTacToeRoutingModule } from './tick-tac-toe-routing.module';
import { TickTacToeComponent } from './tick-tac-toe.component';
import { StoreModule } from '@ngrx/store';
import { tickReducer } from './store/tick-tac-toe.reducer';


@NgModule({
  declarations: [
    TickTacToeComponent
  ],
  imports: [
    CommonModule,
    TickTacToeRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("tick-tac-toe",tickReducer),
  ],

  bootstrap:[TickTacToeComponent]
})
export class TickTacToeModule { }
