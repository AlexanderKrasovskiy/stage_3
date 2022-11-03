import { createSelector } from '@ngrx/store';
import { AdminCardsState } from '../reducers/admin.reducer';
import { AppState } from '../state.models';

const selectAdminCards = (state: AppState) => state.adminCards;

export const selectAllAdminCards = createSelector(
  selectAdminCards,
  (adminCards: AdminCardsState) => adminCards.items,
);

export const selectCurrentCustomCard = createSelector(
  selectAdminCards,
  (adminCards: AdminCardsState) => adminCards.currentCard,
);
