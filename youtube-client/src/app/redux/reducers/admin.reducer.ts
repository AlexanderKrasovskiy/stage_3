import { createReducer, on } from '@ngrx/store';
import { AdminCardType } from '../state.models';
import { createCardAction, deleteAdminCards } from '../actions/admin.actions';

type AdminCardsState = AdminCardType[];

const initialState: AdminCardsState = [];

export const adminCardsReducer = createReducer(
  initialState,
  on(
    createCardAction,
    (state, payload): AdminCardsState => [...state, payload],
  ),
  on(deleteAdminCards, (): AdminCardsState => []),
);
