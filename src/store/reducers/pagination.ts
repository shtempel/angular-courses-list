import * as paginationActions from '../actions/pagination';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pagination } from '../../app/models';

const initialState = {
    limit: 4
};

export function reducer(state = initialState, action: paginationActions.PaginationActions) {
    switch (action.type) {

        case paginationActions.SET_PAGINATION_STATE: {
            return {
                ...state,
                limit: action.payload.limit
            };
        }

        default: {
            return state;
        }
    }
}

// Selectors

export const getPaginationState = createFeatureSelector<Pagination>(
    'pagination'
);

export const getLimit = createSelector(
    getPaginationState,
    (state: any) => state.limit
);

