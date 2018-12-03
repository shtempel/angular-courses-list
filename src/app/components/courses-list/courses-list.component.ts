import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as coursesActions from './../../../store/actions/courses';
import { getLimit } from '../../../store/reducers/pagination';
import { getCourses } from '../../../store/reducers/courses';
import * as assets from '../../../constants/_const';
import { ICourseItem } from 'src/app/models';
import * as models from '../../models';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<ICourseItem[]>;
    emptyListMessage = assets.common.NO_DATA;

    constructor(
        private coursesStore: Store<ICourseItem>,
        private paginationStore: Store<models.Pagination>
    ) { }

    ngOnInit() {
        this.paginationStore.pipe(select(getLimit)).subscribe(
            res => {
                this.coursesStore.dispatch(new coursesActions.FetchCourses({limit: res}));
            });

        this.courses$ = this.coursesStore.pipe(select(getCourses));
    }
}
