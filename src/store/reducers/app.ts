import * as appActions from '../actions/app';

const initialState = {
    isEditForm: false,
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

        case appActions.SET_EDIT_FORM_STATE: {
            return {
                ...state,
                isEditForm: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
