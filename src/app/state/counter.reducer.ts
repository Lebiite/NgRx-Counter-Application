import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export function counterReducer(state: number = initialState, action: Action): number {
  return createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => (state > 0 ? state - 1: state)),
    on(reset, () => initialState),
  )(state, action)
}
