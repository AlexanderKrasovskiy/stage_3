import { createReducer, on } from '@ngrx/store';
import { YtItem } from 'src/app/youtube/models/search-item.model';
import {
  createCardAction,
  clearAdminCards,
  searchAdminCardAction,
} from '../actions/admin.actions';

export type AdminCardsState = {
  items: YtItem[];
  currentCard: YtItem | null;
};

const initialState: AdminCardsState = {
  items: [],
  currentCard: null,
};

export const adminCardsReducer = createReducer(
  initialState,
  on(
    createCardAction,
    (state, payload): AdminCardsState => ({
      ...state,
      items: [...state.items, payload],
    }),
  ),
  on(
    clearAdminCards,
    (): AdminCardsState => ({ items: [], currentCard: null }),
  ),
  on(
    searchAdminCardAction,
    (state, { id }): AdminCardsState => ({
      ...state,
      currentCard: state.items.find((card) => card.id === id) || null,
    }),
  ),
);
