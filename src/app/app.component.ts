import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ICourseItem } from './models';

import { MoviesService } from './services/movies/movies.service';
import * as moviesActions from '../store/movies/actions';
import { GetCourses } from '../store/movies/actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
    crs;
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

    constructor(private store: Store<ICourseItem>, private service: MoviesService) {
    }

    ngOnInit() {
        // this.service.searchMovies()
        //     .subscribe((movies) => {
        //         this.crs = movies[ 1 ].id;
        //     });
        // this.store.dispatch(moviesActions.GetCourses);
    }
}
