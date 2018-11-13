import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { common, buttonsNames } from '../../../constants/_const';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    toTaskPage = buttonsNames.TO_TASK_PAGE;
    footerText = common.COPYRIGHT;
    currentUrl: Observable<any>;
    url;
    isShowFooter: boolean;

    constructor(private store: Store) {
        this.currentUrl = this.store.select('router');
        this.currentUrl.subscribe((routerState) => {
            routerState ? this.url = routerState.state.url : this.url = undefined;
            this.isShowFooter = this.url === '/courses';
        });
    }

    ngOnInit() {
    }
}
