import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { data, playground } from './store/tick-tac-toe.selectors';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { changeData, fillBox } from './store/tick-tac-toe.actions';
@Component({
  selector: 'app-tick-tac-toe',
  templateUrl: './tick-tac-toe.component.html',
  styleUrls: ['./tick-tac-toe.component.scss']
})
export class TickTacToeComponent implements OnInit{
  static turn : string='O';

  fillBox(x: number,y: number) {
  console.log(x,y)
  this.store.dispatch(fillBox({x,y}));
  

}
log(_t6: any) {
console.log("Data-----------",_t6)
}
  
   arr:string[] = ['Str2s','Str1']
  

  constructor(private store:Store){

  }
  ngOnInit(): void {
    
    interval(1000).subscribe(x => {
      const randomElement = this.arr[Math.floor(Math.random() * this.arr.length)];
      this.store.dispatch(changeData({payload : randomElement}))
  });
  }

  data$ = this.store.select(data)
  playground$ = this.store.select(playground);
}
