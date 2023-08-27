import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import { TickState } from "./tick-tac-toe.models";
import { checkwinStatus, toggle } from "./tick-tac-toe.helpers";


export const tickState = createFeatureSelector<TickState>('tick-tac-toe');

export const data = createSelector(tickState,state=>state.data);

export const playground = createSelector(tickState,state=>state.playground);

export const winner = createSelector(tickState,state=>state.winner);

export const game = createSelector(tickState , state=>checkwinStatus(state.playground,toggle(state.turn)))



