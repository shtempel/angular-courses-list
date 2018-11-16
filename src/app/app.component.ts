import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICourseItem } from './models';

import * as symbolActions from './../store/courses/actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    courses = [
        {
            id: 1,
            date: '11-14-2018',
            name: 'Course one',
            duration: 120,
            description: ' this.description',
            topRated: false
        },
        {
            id: 2,
            date: '11-14-2018',
            name: 'Course two',
            duration: 60,
            description: 'this.description',
            topRated: true
        }
    ];

    constructor(private store: Store<ICourseItem>) {
    }

    ngOnInit() {
        // const toLocalStorage = JSON.stringify(this.courses);
        // localStorage.clear();
        // localStorage.setItem('course', toLocalStorage);
        // const fromLocalStorage = localStorage.getItem('course');
        // const y = JSON.parse(fromLocalStorage);
        // console.log(y);

        this.store.dispatch({
            type: symbolActions.GET_COURSES_SUCCESS
        });

        this.store.dispatch({
            type: symbolActions.ADD_COURSE_SUCCESS,
            payload: {
                id: 4,
                date: '03-01-2019',
                name: 'Course four',
                duration: 30,
                description: 'this.description',
                topRated: true
            },
        });
        this.store.dispatch({
            type: symbolActions.DELETE_COURSE_SUCCESS,
            payload: 2
        });

    }
}
