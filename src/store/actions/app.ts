import { Action } from '@ngrx/store';

export const SET_AUTHORISED_STATE = 'SET_AUTHORISED_STATE';
export const SET_EXIST_NAME_STATE = 'SET_EXIST_NAME_STATE';
export const SET_EDIT_FORM_STATE = 'SET_EDIT_FORM_STATE';
export const SET_REG_STATE = 'SET_REG_STATE';

export class SetAuthState implements Action {
    readonly type = SET_AUTHORISED_STATE;

    constructor(public payload: { status: boolean }) {
    }
}

export class SetRegState implements Action {
    readonly type = SET_REG_STATE;

    constructor(public payload: { status: boolean }) {
    }
}

export class SetExistNameState implements Action {
    readonly type = SET_EXIST_NAME_STATE;

    constructor(public payload: { status: boolean }) {
    }
}

export class SetEditFormState implements Action {
    readonly type = SET_EDIT_FORM_STATE;

    constructor(public payload: boolean) {
    }
}

export type AppActions =
    SetExistNameState |
    SetEditFormState |
    SetAuthState |
    SetRegState;
