import { createReducer, on } from "@ngrx/store";
import { TickState } from "./tick-tac-toe.models";
import * as actions from '../store/tick-tac-toe.actions';
import { updateplayground } from "./tick-tac-toe.helpers";

const initialState : TickState = {
    data: "Start Data",
    player1Name: "",
    player2Name: "",
    playground: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],
    winner: "",
    losser: "",
    isGameOver: false
}

export const tickReducer = createReducer(
    initialState,
    on(actions.changeData,(state,{payload})=>{
        return {...state,data:payload}
    }),

   on(actions.fillBox ,(state,{x,y})=>{
    return {...state,playground : updateplayground(state.playground, x, y,'x' ) }
   }) 
)