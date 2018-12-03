import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as coursesActions from '../../store/actions/courses';
import * as fromServices from '../services/index';

@Injectable()
export class CoursesEffects {

    @Effect()
    fetchingCourses$ = this.actions$
        .pipe(
            ofType(coursesActions.FETCHING_COURSES),
            switchMap((action: coursesActions.FetchCourses) => {
                return this.coursesService.getAllCourses(action.payload.limit)
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
                                    topRated: course.isTopRated
                                };
                            }
                        ))),
                        catchError(error => of(new coursesActions.FetchCoursesFail(error))));
            })
        );

    @Effect()
    searchingCourses$ = this.actions$
        .pipe(
            ofType(coursesActions.FETCH_COURSE_SEARCH),
            switchMap((action: coursesActions.FetchCourseSearch) => {
                return this.coursesService.searchCourses(action.payload)
                    .pipe(
                        map(courses => new coursesActions.FetchCourseSearchSuccess(courses.map(
                            course => {
                                return {
                                    id: course.id,
                                    title: course.name,
                                    duration: course.length,
                                    releaseDate: course.date,
                                    authors: course.authors,
                                    description: course.description,
                                    topRated: course.isTopRated
                                };
                            }
                        ))),
                        catchError(error => of(new coursesActions.FetchCourseSearchFail(error))));
            })
        );

    @Effect()
    fetchCourseById$ = this.actions$
        .pipe(
            ofType(coursesActions.FETCH_COURSE_BY_ID),
            switchMap((action: coursesActions.FetchCourseById) => {
                return this.coursesService.getCourseById(action.payload)
                    .pipe(
                        map(course => new coursesActions.FetchCourseByIdSuccess(course))
                    );
            }),
            catchError(error => of(new coursesActions.FetchCourseByIdFail(error))));

    @Effect()
    deleteCourse$ = this.actions$
        .pipe(
            ofType(coursesActions.FETCH_COURSE_DELETE),
            switchMap((action: coursesActions.FetchCourseDelete) => {
                return this.coursesService.deleteCourseById(action.payload)
                    .pipe(
                        map(() => {
                            return new coursesActions.FetchCourseDeleteSuccess(action.payload);
                        })
                    );
            }),
            catchError(error => of(new coursesActions.FetchCourseDeleteFail(error))));

    @Effect()
    addCourse$ = this.actions$
        .pipe(
            ofType(coursesActions.FETCH_COURSE_ADD),
            switchMap((action: coursesActions.FetchCourseAdd) => {
                return this.coursesService.addCourse(action.payload)
                    .pipe(
                        map(() => {
                            return new coursesActions.FetchCourseAddSuccess(action.payload);
                        })
                    );
            }),
            catchError(error => of(new coursesActions.FetchCourseAddFail(error))));


    @Effect()
    updateCourse$ = this.actions$
        .pipe(
            ofType(coursesActions.FETCH_COURSE_UPDATE),
            switchMap((action: coursesActions.FetchCourseUpdate) => {
                return this.coursesService.updateCourseById(action.payload.id, action.payload.course)
                    .pipe(
                        map(() => {
                            return new coursesActions.FetchCourseUpdateSuccess(action.payload.id);
                        })
                    );
            }),
            catchError(error => of(new coursesActions.FetchCourseUpdateFail(error))));

    constructor(private actions$: Actions, private coursesService: fromServices.CoursesService) { }
}
