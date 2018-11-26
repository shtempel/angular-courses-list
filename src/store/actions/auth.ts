import { Action } from '@ngrx/store';

export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR_RESET = 'REGISTRATION_ERROR_RESET';
export const USER_REGISTRATION_FAIL = 'USER_REGISTRATION_FAIL';
export const USER_REGISTRATION = 'USER_REGISTRATION';

export class UserRegistration implements Action {
    readonly type = USER_REGISTRATION;

    constructor() {
    }
}

export class UserRegistrationSuccess implements Action {
    readonly type = USER_REGISTRATION_SUCCESS;

    constructor() {
    }
}

export class UserRegistrationFail implements Action {
    readonly type = USER_REGISTRATION_FAIL;

    constructor() {
    }
}

export class RegistrationErrorReset implements Action {
    readonly type = REGISTRATION_ERROR_RESET;

    constructor() {
    }
}

export type AuthActions =
    UserRegistrationSuccess |
    RegistrationErrorReset |
    UserRegistrationFail |
    UserRegistration;
