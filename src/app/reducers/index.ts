import * as fromLayout from '../core/reducers/layout';

import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
    layout: fromLayout.State
}
export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer
}
export const showSidenav = createSelector(
    createFeatureSelector('layout'),
    fromLayout.getShowSidenav
)