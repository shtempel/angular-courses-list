import * as appActions from '../actions/app';

const initialState = {
    isAuthorized: true,
    isRegOpen: false
};

export function reducer(state = initialState, action: appActions.AppActions) {
    switch (action.type) {

        case appActions.SET_AUTHORISED_STATE: {
            return {
                ...state,
                isAuthorized: action.payload.status,
            };
        }

        case appActions.SET_REG_STATE: {
            return {
                ...state,
                isRegOpen: action.payload.status
            };
        }

        default: {
            return state;
        }
    }
}
