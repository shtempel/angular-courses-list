import { Component, OnInit } from '@angular/core';

import { buttonsNames } from '../../../../constants/_const';

@Component({
    selector: 'app-load-more',
    templateUrl: './load-more.component.html',
    styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
    title = buttonsNames.LOAD_MORE;

    constructor() {
    }

    ngOnInit() {
    }

    loadMore() {
        console.log('Just simple console log.');
    }
}
