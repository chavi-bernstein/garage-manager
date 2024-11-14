import { createSelector } from '@ngrx/store';
import { AppState } from './store';
import { GaragesState } from './reducers';

export const selectGaragesState = (state: AppState) => state.garages;

export const selectAllGarages = createSelector(
  selectGaragesState,
  (state: GaragesState) => state.garages
);

export const selectGaragesLoading = createSelector(
  selectGaragesState,
  (state: GaragesState) => state.loading
);

export const selectGaragesError = createSelector(
  selectGaragesState,
  (state: GaragesState) => state.error
);
