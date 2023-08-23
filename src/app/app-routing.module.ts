import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"tick",
    loadChildren:()=>
    import('./tick-tac-toe/tick-tac-toe.module').then(m=>m.TickTacToeModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
