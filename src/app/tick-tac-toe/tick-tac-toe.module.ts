import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickTacToeRoutingModule } from './tick-tac-toe-routing.module';
import { TickTacToeComponent } from './tick-tac-toe.component';
import { StoreModule } from '@ngrx/store';
import { tickReducer } from './store/tick-tac-toe.reducer';
import { SymbolPipe } from '../pipes/symbol.pipe';
import { effects } from './store/tick-tac-toe.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    TickTacToeComponent,
  ],
  imports: [
    CommonModule,
    SymbolPipe,
    TickTacToeRoutingModule,
    StoreModule.forFeature("tick-tac-toe",tickReducer),
    EffectsModule.forFeature(effects),
    
  ],

  bootstrap:[TickTacToeComponent]
})
export class TickTacToeModule { }
