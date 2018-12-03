import { Action } from '@ngrx/store';

export const SET_PAGINATION_STATE = 'SET_PAGINATION_STATE';


export class SetPaginationState implements Action {
    readonly type = SET_PAGINATION_STATE;

    constructor(public payload: { limit: number }) {
    }
}

export type PaginationActions =
    SetPaginationState ;
