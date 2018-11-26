import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import * as localStorageHelper from './../../../utils/localStorageHelper';
import * as authActions from '../../../store/actions/auth';
import * as appActions from './../../../store/actions/app';
import * as models from '../../models';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private  authStore: Store<models.Auth>, private appStore: Store<models.App>) {
    }

    checkUserLoginName(loginName) {
        const dataFromStorage = localStorageHelper.getInfoFromStorage('registeredUsers');
        const data = dataFromStorage ? [ ...dataFromStorage ] : [];
        return _.find(data, {loginName});
    }

    registerUser(loginName, password) {
        const user: any = {
            loginName,
            password
        };

        const dataFromStorage = localStorageHelper.getInfoFromStorage('registeredUsers');

        const data = dataFromStorage ? [ ...dataFromStorage ] : [];
        if (this.checkUserLoginName(loginName)) {
            this.authStore.dispatch(new authActions.UserRegistrationFail());
        } else {
            data.push(user);
            localStorageHelper.addInfoToStorage('registeredUsers', data);
            this.authStore.dispatch(new authActions.UserRegistrationSuccess());
            this.authStore.dispatch(new authActions.RegistrationErrorReset());
            this.appStore.dispatch(new appActions.SetRegState({status: false}));
        }
    }

    loginUser(login, password) {
        const user = localStorageHelper.getInfoFromStorage('registeredUsers')
            .filter(userData => userData.loginName === login);

        if (user[0].password === password) {
            this.appStore.dispatch(new appActions.SetAuthState({status: true}));
        }
    }
}



