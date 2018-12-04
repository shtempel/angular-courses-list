import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { buttonsNames } from '../../../constants/_const';
import { AuthService } from '../../services/auth';
import { App } from '../../models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    authStatus;
    assets = {
        logout: buttonsNames.USER_LOGOFF
    };

    constructor(
        private authService: AuthService,
        private appStore: Store<App>
    ) { }

    onLogout() {
        this.authService.logoff();
    }

    ngOnInit() {
        this.appStore.select('app')
            .subscribe(
                res => this.authStatus = res.isAuthorized
            );
    }
}
