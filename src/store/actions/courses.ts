import { Action } from '@ngrx/store';

import { ICourseItem } from '../../app/models';

// Actions

// Get all courses
export const FETCHING_COURSES_SUCCESS = 'FETCHING_COURSES_SUCCESS';
export const FETCHING_COURSES_FAIL = 'FETCHING_COURSES_FAIL';
export const FETCHING_COURSES = 'FETCHING_COURSES';

// Delete course by id
export const FETCH_COURSE_DELETE_SUCCESS = 'FETCH_COURSE_DELETE_SUCCESS';
export const FETCH_COURSE_DELETE_FAIL = 'FETCH_COURSE_DELETE_FAIL';
export const FETCH_COURSE_DELETE = 'FETCH_COURSE_DELETE';

// Add new course
export const FETCH_COURSE_ADD_SUCCESS = 'FETCH_COURSE_ADD_SUCCESS';
export const FETCH_COURSE_ADD_FAIL = 'FETCH_COURSE_ADD_FAIL';
export const FETCH_COURSE_ADD = 'FETCH_COURSE_ADD';

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

    constructor(public payload: { id: number }) {
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

export class FetchCourseAdd implements Action {
    readonly type = FETCH_COURSE_ADD;

    constructor(public payload: any) {
    }
}

export class FetchCourseAddSuccess implements Action {
    readonly type = FETCH_COURSE_ADD_SUCCESS;

    constructor(public payload: any) {
    }

}

export class FetchCourseAddFail implements Action {
    readonly type = FETCH_COURSE_ADD_FAIL;

    constructor(public payload: any) {
    }
}

export type CoursesActions =
    FetchCoursesSuccess |
    FetchCoursesFail |
    FetchCourses |

    FetchCourseDeleteSuccess |
    FetchCourseDeleteFail |
    FetchCourseDelete |

    FetchCourseAddSuccess |
    FetchCourseAddFail |
    FetchCourseAdd;
