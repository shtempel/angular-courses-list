import * as authActions from '../actions/auth';

export interface AuthState {
    isRegistering: boolean;
    isUserExist: boolean;
}

export const initialState: AuthState = {
    isRegistering: false,
    isUserExist: false
};

export function reducer(state = initialState, action: authActions.AuthActions): AuthState {
    switch (action.type) {

        case authActions.USER_REGISTRATION: {
            return {
                ...state,
                isRegistering: true
            };
        }

        case authActions.USER_REGISTRATION_SUCCESS: {
            return {
                ...state,
                isRegistering: false
            };
        }

        case authActions.USER_REGISTRATION_FAIL: {
            return {
                ...state,
                isRegistering: false,
                isUserExist: true
            };
        }

        case authActions.REGISTRATION_ERROR_RESET: {
            return {
                ...state,
                isUserExist: false
            };
        }

        default: {
            return state;
        }
    }
}
