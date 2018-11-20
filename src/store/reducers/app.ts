import * as appActions from '../actions/app';

const initialState = {isAuthorized: false};

export function app(state = initialState, action: appActions.AppActions) {
    switch (action.type) {

        case appActions.SET_AUTHORISED_STATE: {
            return {
                isAuthorized: action.payload.status
            };
        }
        default: {
            return state;
        }
    }
}
