import { createSelector } from '@ngrx/store';
import { AppState, AdminCardType } from '../state.models';

export const selectAdminCards = (state: AppState) => state.adminCards;

export const selectAllAdminCards = createSelector(
  selectAdminCards,
  (adminCards: AdminCardType[]) => adminCards,
);
