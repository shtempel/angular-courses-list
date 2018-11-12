import { Component, OnInit } from '@angular/core';

import { common, buttonsNames } from '../../../constants/_const';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    footerText = common.COPYRIGHT;
    toTaskPage = buttonsNames.TO_TASK_PAGE;

    constructor() {
    }

    ngOnInit() {
    }
}
