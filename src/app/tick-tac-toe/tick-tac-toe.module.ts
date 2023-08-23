import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickTacToeRoutingModule } from './tick-tac-toe-routing.module';
import { TickTacToeComponent } from './tick-tac-toe.component';
import { StoreModule } from '@ngrx/store';
import { tickReducer } from './store/tick-tac-toe.reducer';
import { SymbolPipe } from '../pipes/symbol.pipe';


@NgModule({
  declarations: [
    TickTacToeComponent,
  ],
  imports: [
    CommonModule,
    SymbolPipe,
    TickTacToeRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("tick-tac-toe",tickReducer),
  ],

  bootstrap:[TickTacToeComponent]
})
export class TickTacToeModule { }
