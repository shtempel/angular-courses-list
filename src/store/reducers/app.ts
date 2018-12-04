import * as appActions from '../actions/app';

const initialState = {
    isEditForm: false,
    isAuthorized: false
};

export function reducer(state = initialState, action: appActions.AppActions) {
    switch (action.type) {

        case appActions.SET_AUTHORISED_STATE: {
            return {
                ...state,
                isAuthorized: action.payload.status,
            };
        }

        default: {
            return state;
        }
    }
}
