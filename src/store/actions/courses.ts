import { Action } from '@ngrx/store';

import { ICourseItem } from '../../app/models';

// Actions
export const FETCHING_COURSES_SUCCESS = 'FETCHING_COURSES_SUCCESS';
export const FETCHING_COURSES_FAIL = 'FETCHING_COURSES_FAIL';
export const FETCHING_COURSES = 'FETCHING_COURSES';

export const FETCH_COURSE_DELETE_SUCCESS = 'FETCH_COURSE_DELETE_SUCCESS';
export const FETCH_COURSE_DELETE_FAIL = 'FETCH_COURSE_DELETE_FAIL';
export const FETCH_COURSE_DELETE = 'FETCH_COURSE_DELETE';

// Action creators
export class FetchCourses implements Action {
    readonly type = FETCHING_COURSES;

    constructor() {
    }
}

export class FetchCoursesSuccess implements Action {
    readonly type = FETCHING_COURSES_SUCCESS;

    constructor(public payload: ICourseItem[]) {
    }
}

export class FetchCoursesFail implements Action {
    readonly type = FETCHING_COURSES_FAIL;

    constructor(public payload: {id: number}) {
    }
}

export class FetchCourseDelete implements Action {
    readonly type = FETCH_COURSE_DELETE;

    constructor(public payload: any) {
    }

}

export class FetchCourseDeleteSuccess implements Action {
    readonly type = FETCH_COURSE_DELETE_SUCCESS;

    constructor(public payload: any) {
    }

}

export class FetchCourseDeleteFail implements Action {
    readonly type = FETCH_COURSE_DELETE_FAIL;

    constructor(public payload: any) {
    }
}

export type CoursesActions =
    FetchCourseDeleteSuccess |
    FetchCourseDeleteFail |
    FetchCoursesSuccess |
    FetchCourseDelete |
    FetchCoursesFail |
    FetchCourses;
