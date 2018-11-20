import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as appActions from '../../../store/actions/app';
import { buttonsNames } from '../../../constants/_const';
import { App } from '../../models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    authStatus;
    assets = {
        login: buttonsNames.USER_LOGIN,
        logout: buttonsNames.USER_LOGOFF
    };

    constructor(private  store: Store<App>) {
    }

    onLogin() {
        this.setStatus(true);
    }

    onLogout() {
        this.setStatus(false);
    }

    setStatus(status: boolean) {
        this.store.dispatch(new appActions.SetAuthState({status: status}));
    }

    ngOnInit() {
        this.authStatus = this.store.select('app');
        this.authStatus.subscribe(status => this.authStatus = status.isAuthorized);
    }
}
