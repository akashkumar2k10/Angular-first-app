import { createAction, props } from "@ngrx/store";

export const changeData = createAction(
    '[Tick-Tac-Toe] Change Data',
    props<{payload:string}>()
)

export const fillBox = createAction(
    '[Tick-Tac-Toe] fill box',
    props<{x:number,y:number}>()
)
