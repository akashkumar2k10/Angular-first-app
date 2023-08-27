import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { data, game, playground, winner } from './store/tick-tac-toe.selectors';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { changeData, fillBox, playerWins, restartGame } from './store/tick-tac-toe.actions';
@Component({
  selector: 'app-tick-tac-toe',
  templateUrl: './tick-tac-toe.component.html',
  styleUrls: ['./tick-tac-toe.component.scss']
})
export class TickTacToeComponent implements OnInit{

  fillBox(x: number,y: number) {
    console.log(x,y)
    this.store.dispatch(fillBox({x,y}));
  }
  log(_t6: any) {
    console.log("Data-----------",_t6)
  }
  
  arr:string[] = ['Str2s','Str1']
  popup : boolean = false;
  
  constructor(private store:Store){

  }

  restartGame(){
    this.store.dispatch(restartGame())
    this.popup = false;
    
  }
  ngOnInit(): void {
    
  //   interval(1000).subscribe(x => {
  //     const randomElement = this.arr[Math.floor(Math.random() * this.arr.length)];
  //     this.store.dispatch(changeData({payload : randomElement}))
  // });

  this.isWin$.subscribe((data: boolean) => {
    console.log("Is win",data)
    if(data == true){
      this.popup = true;
      this.store.dispatch(playerWins());
    }
  })
  }

  data$ = this.store.select(data)
  playground$ = this.store.select(playground);
  isWin$ = this.store.select(game); 
  winner$ = this.store.select(winner);
}
