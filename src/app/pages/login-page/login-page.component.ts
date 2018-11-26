import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as authActions from '../../../store/actions/auth';
import * as appActions from '../../../store/actions/app';
import * as assets from './../../../constants/_const';
import { AuthService } from '../../services';
import { Auth } from '../../models/auth';
import { App } from '../../models';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: [ './login-page.component.scss' ]
})
export class LoginPageComponent implements OnInit {
    passwordInputValue: string;
    loginInputValue: string;
    isUserExist: boolean;
    isRegOpen: boolean;
    assets = {
        passPlaceHolder: assets.common.PLEASE_ENTER_PASSWORD,
        loginPlaceHolder: assets.common.PLEASE_ENTER_LOGIN,
        registerUser: assets.common.REGISTER_USER,
        registration: assets.common.REGISTRATION,
        errorMessage: assets.common.LOGIN_EXIST,
        pass: assets.common.PASSWORD,
        login: assets.common.LOGIN
    };

    constructor(
        private authService: AuthService,
        private  authStore: Store<Auth>,
        private  appStore: Store<App>) {
    }

    ngOnInit() {
        this.appStore.subscribe(state => {
            this.isRegOpen = state.app.isRegOpen;
        });
        this.authStore.subscribe(state => {
            this.isUserExist = state.auth.isUserExist;
        });
    }

    getLogin(event: KeyboardEvent) {
        this.loginInputValue = (<HTMLInputElement>event.target).value;
    }

    getPass(event: KeyboardEvent) {
        this.passwordInputValue = (<HTMLInputElement>event.target).value;
    }

    manageUserActivity() {
        if (!this.isRegOpen) {
            this.authService.loginUser(this.loginInputValue, this.passwordInputValue);
        } else {
            this.authStore.dispatch(new authActions.UserRegistration());
            this.authService.registerUser(this.loginInputValue, this.passwordInputValue);
        }
    }

    manageForms() {
        !this.isRegOpen ? this.setStatus(true) : this.setStatus(false);
    }

    setStatus(status: boolean) {
        this.appStore.dispatch(new appActions.SetRegState({status: status}));
    }
}
