import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import { TickState } from "./tick-tac-toe.models";

export const tickState = createFeatureSelector<TickState>('tick-tac-toe');

export const data = createSelector(tickState,state=>state.data);

export const playground = createSelector(tickState,state=>state.playground);

