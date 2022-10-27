import { createReducer, on } from '@ngrx/store';
import { AdminCardType } from '../state.models';
import { createCardAction } from '../actions/admin.actions';

export type AdminCardsState = AdminCardType[];

export const initialState: AdminCardsState = [];

export const adminCardsReducer = createReducer(
  initialState,
  on(
    createCardAction,
    (state, payload): AdminCardsState => [...state, payload],
  ),
);
