import { Component, OnInit } from '@angular/core';

import { buttonsNames } from '../../../constants/_const';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    titles = {
        login: buttonsNames.USER_LOGIN,
        logout: buttonsNames.USER_LOGOFF
    };

    constructor() {
    }

    ngOnInit() {
    }
}
