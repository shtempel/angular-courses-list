import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as coursesActions from '../../store/actions/courses';
import * as fromServices from '../services/index';

@Injectable()
export class CoursesEffects {

    @Effect()
    fetchingCourses$ = this.actions$.ofType(coursesActions.FETCHING_COURSES)
        .pipe(
            switchMap(() => {
                return this.coursesService.getAllCourses()
                    .pipe(
                        map(courses => new coursesActions.FetchCoursesSuccess(courses.map(
                            course => {
                                return {
                                    id: course.id,
                                    title: course.name,
                                    duration: course.length,
                                    releaseDate: course.date,
                                    authors: course.authors,
                                    description: course.description,
                                    topRated: course.isTopRated,
                                };
                            }
                        ))),
                        catchError(error => of(new coursesActions.FetchCoursesFail(error))));
            })
        );

    @Effect()
    deleteCourse$ = this.actions$.ofType(coursesActions.FETCH_COURSE_DELETE)
        .pipe(
            switchMap((action: coursesActions.FetchCourseDelete) => {
                return this.coursesService.deleteCourseById(action.payload)
                    .pipe(
                        map(() => {
                            return new coursesActions.FetchCourseDeleteSuccess(action.payload);
                        })
                    );
            }),
            catchError(error => of(new coursesActions.FetchCourseDeleteFail(error))));

    constructor(private actions$: Actions, private coursesService: fromServices.CoursesService) {

    }
}
