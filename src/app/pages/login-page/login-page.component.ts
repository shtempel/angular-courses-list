import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as appActions from '../../../store/actions/app';
import * as assets from './../../../constants/_const';
import { AuthService } from '../../services';
import { App } from '../../models';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    isRegOpen: boolean;

    assets = {
        passPlaceHolder: assets.common.PLEASE_ENTER_PASSWORD,
        loginPlaceHolder: assets.common.PLEASE_ENTER_LOGIN,
        registerUser: assets.common.REGISTER_USER,
        registration: assets.common.REGISTRATION,
        pass: assets.common.PASSWORD,
        login: assets.common.LOGIN
    };

    constructor(private  store: Store<App>, private authService: AuthService) {
    }

    ngOnInit() {
        this.store.subscribe(state => {
            this.isRegOpen = state.app.isRegOpen;
        });
    }

    manageUserActivity() {
        if (!this.isRegOpen) {
            console.log('login');
        } else {
            this.authService.registerUser('1', '2');
        }
    }

    manageForms() {
        !this.isRegOpen ? this.setStatus(true) : this.setStatus(false);
    }

    setStatus(status: boolean) {
        this.store.dispatch(new appActions.SetRegState({status: status}));
    }
}
