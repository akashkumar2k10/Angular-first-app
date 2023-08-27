import { createAction, emptyProps, props } from "@ngrx/store";

export const changeData = createAction(
    '[Tick-Tac-Toe] Change Data',
    props<{payload:string}>()
)

export const fillBox = createAction(
    '[Tick-Tac-Toe] fill box',
    props<{x:number,y:number}>()
)

export const playerWins = createAction(
    '[Tick-Tac-Toe] Player Wins',
    emptyProps
) 

export const restartGame=createAction(
    '[Tick-Tac-Toe] Restart Game',
    emptyProps
)