import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TickTacToeComponent } from './tick-tac-toe.component';

const routes: Routes = [
  {path:"",component:TickTacToeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TickTacToeRoutingModule { }
