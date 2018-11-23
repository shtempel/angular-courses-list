import * as appActions from '../actions/app';

const initialState = {
    isAuthorized: false,
    isRegOpen: false
};

export function app(state = initialState, action: appActions.AppActions) {
    switch (action.type) {

        case appActions.SET_AUTHORISED_STATE: {
            return {
                isAuthorized: action.payload.status,
                isRegOpen: false
            };
        }

        case appActions.SET_REG_STATE: {
            return {
                isAuthorized: false,
                isRegOpen: action.payload.status
            };
        }

        default: {
            return state;
        }
    }
}
