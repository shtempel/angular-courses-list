import * as appActions from './actions';

const initialState = {isAuthorized: false};

export function reducer(state = initialState, action: appActions.Actions) {
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
