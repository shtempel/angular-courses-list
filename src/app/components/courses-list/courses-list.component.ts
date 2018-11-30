import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as coursesActions from './../../../store/actions/courses';
import { getCourses } from '../../../store/reducers/courses';
import * as assets from '../../../constants/_const';
import { ICourseItem } from 'src/app/models';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<ICourseItem[]>;
    emptyListMessage = assets.common.NO_DATA;

    constructor(private coursesStore: Store<ICourseItem>) { }

    ngOnInit() {
        this.coursesStore.dispatch(new coursesActions.FetchCourses());
        this.courses$ = this.coursesStore.pipe(select(getCourses));
    }
}
