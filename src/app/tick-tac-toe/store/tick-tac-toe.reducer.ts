import { createReducer, on } from "@ngrx/store";
import { TickState } from "./tick-tac-toe.models";
import * as actions from '../store/tick-tac-toe.actions';
import { checkwinStatus, findWinnerAndLosser, toggle, updateplayground } from "./tick-tac-toe.helpers";

const initialState : TickState = {
    data: "Start Data",
    player1Name: "Player 1",
    player2Name: "Player 2",
    playground: [[0,0,0],[0,0,0],[0,0,0]],
    winner: "",
    losser: "",
    isGameOver: false,
    turn : 1,
    error : 0,
    checkwinStatus:false,

     
}

export const tickReducer = createReducer(
    initialState,
    on(actions.changeData,(state,{payload})=>{
        return {...state,data:payload}
    }),

   on(actions.fillBox ,(state,{x,y})=>{
    const {playground,error} = updateplayground(state.playground, x, y,state.turn );
    let turn:number = state.turn;
    if(error == 0) turn = toggle(turn);
    return {...state,playground : playground , error : error ,turn:turn,checkwinStatus:checkwinStatus(playground,toggle(turn)) }
   }),

   on(actions.playerWins,(state)=>{
    let {winner,loser} =findWinnerAndLosser(toggle(state.turn),state.player1Name,state.player2Name);

    return {...state,
        isGameOver:true,
        winner : winner,
        losser:loser,
        
    }
   }),

   on(actions.restartGame,(state)=>{
    return initialState;
   })

)