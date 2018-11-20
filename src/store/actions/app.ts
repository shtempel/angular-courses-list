import { Action } from '@ngrx/store';

export const SET_AUTHORISED_STATE = 'SET_AUTHORISED_STATE';

export class SetAuthState implements Action {
    readonly type = SET_AUTHORISED_STATE;

    constructor(public payload: { status: boolean }) {
    }
}

export type AppActions = SetAuthState;
