import { Injectable, effect } from "@angular/core";
import { createEffect,Actions,ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import * as actions from './tick-tac-toe.actions';
import { map, mergeMap, pipe, switchMap, withLatestFrom } from "rxjs";
import { game } from "./tick-tac-toe.selectors";
@Injectable()
export class TickEffects {
    
    // getGame$ = createEffect(()=>{
    //     return this.actions$.pipe(
    //         ofType(actions.fillBox),
    //         map(()=>{
    //             return actions.changeData({payload:"Win"})
    //         })
    //     )
    // })

    constructor(private actions$:Actions,private store:Store){

    }
}

export const effects = [TickEffects];