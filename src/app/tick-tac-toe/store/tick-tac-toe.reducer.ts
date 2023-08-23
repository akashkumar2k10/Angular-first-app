import { createReducer, on } from "@ngrx/store";
import { TickState } from "./tick-tac-toe.models";
import * as actions from '../store/tick-tac-toe.actions';
import { toggle, updateplayground } from "./tick-tac-toe.helpers";

const initialState : TickState = {
    data: "Start Data",
    player1Name: "",
    player2Name: "",
    playground: [[0,0,0],[0,0,0],[0,0,0]],
    winner: "",
    losser: "",
    isGameOver: false,
    turn : 1,
    error : 0, 
     
}

export const tickReducer = createReducer(
    initialState,
    on(actions.changeData,(state,{payload})=>{
        return {...state,data:payload}
    }),

   on(actions.fillBox ,(state,{x,y})=>{
    const {playgroung,error} = updateplayground(state.playground, x, y,state.turn );
    let turn:number = state.turn;
    if(error == 0) turn = toggle(turn);
    return {...state,playground : playgroung , error : error ,turn:turn }
   }) 
)