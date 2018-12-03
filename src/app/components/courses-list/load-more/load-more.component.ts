import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as paginationActions from './../../../../store/actions/pagination';
import { getLimit } from '../../../../store/reducers/pagination';
import { buttonsNames } from '../../../../constants/_const';
import * as models from '../../../models';

@Component({
    selector: 'app-load-more',
    templateUrl: './load-more.component.html',
    styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
    title = buttonsNames.LOAD_MORE;
    public paginationStatus$: Observable<models.Pagination>;
    limit;

    constructor(
        private paginationStore: Store<models.Pagination>) {
    }

    ngOnInit() {
        this.paginationStatus$ = this.paginationStore.pipe(select(getLimit));
        this.paginationStatus$.subscribe(res => this.limit = res);
    }

    loadMore() {
        this.paginationStore.dispatch(new paginationActions.SetPaginationState({limit: this.limit + 4}));
    }
}
