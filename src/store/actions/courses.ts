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

// Fetch course by id
export const FETCH_COURSE_BY_ID_SUCCESS = 'FETCH_COURSE_BY_ID_SUCCESS';
export const FETCH_COURSE_BY_ID_FAIL = 'FETCH_COURSE_BY_ID_FAIL';
export const FETCH_COURSE_BY_ID = 'FETCH_COURSE_BY_ID';

// Update course
export const FETCH_COURSE_UPDATE_SUCCESS = 'FETCH_COURSE_UPDATE_SUCCESS';
export const FETCH_COURSE_UPDATE_FAIL = 'FETCH_COURSE_UPDATE_FAIL';
export const FETCH_COURSE_UPDATE = 'FETCH_COURSE_UPDATE';


// Add new course
export const FETCH_COURSE_ADD_SUCCESS = 'FETCH_COURSE_ADD_SUCCESS';
export const FETCH_COURSE_ADD_FAIL = 'FETCH_COURSE_ADD_FAIL';
export const FETCH_COURSE_ADD = 'FETCH_COURSE_ADD';

export const RESET_CURRENT_COURSE = 'RESET_CURRENT_COURSE';
export const SET_AUTHORS = 'SET_AUTHORS';

// Action creators
export class FetchCourses implements Action {
    readonly type = FETCHING_COURSES;
}

export class FetchCoursesSuccess implements Action {
    readonly type = FETCHING_COURSES_SUCCESS;

    constructor(public payload: ICourseItem[]) { }
}

export class FetchCoursesFail implements Action {
    readonly type = FETCHING_COURSES_FAIL;

    constructor(public payload: { id: number }) { }
}

export class FetchCourseById implements Action {
    readonly type = FETCH_COURSE_BY_ID;

    constructor(public payload: any) { }
}

export class FetchCourseByIdSuccess implements Action {
    readonly type = FETCH_COURSE_BY_ID_SUCCESS;

    constructor(public payload: any) { }

}

export class FetchCourseByIdFail implements Action {
    readonly type = FETCH_COURSE_BY_ID_FAIL;

    constructor(public payload: any) { }
}

export class FetchCourseDelete implements Action {
    readonly type = FETCH_COURSE_DELETE;

    constructor(public payload: any) { }
}

export class FetchCourseDeleteSuccess implements Action {
    readonly type = FETCH_COURSE_DELETE_SUCCESS;

    constructor(public payload: any) { }
}

export class FetchCourseDeleteFail implements Action {
    readonly type = FETCH_COURSE_DELETE_FAIL;

    constructor(public payload: any) { }
}

export class FetchCourseAdd implements Action {
    readonly type = FETCH_COURSE_ADD;

    constructor(public payload: any) { }
}

export class FetchCourseAddSuccess implements Action {
    readonly type = FETCH_COURSE_ADD_SUCCESS;

    constructor(public payload: any) { }

}

export class FetchCourseAddFail implements Action {
    readonly type = FETCH_COURSE_ADD_FAIL;

    constructor(public payload: any) { }
}

export class FetchCourseUpdate implements Action {
    readonly type = FETCH_COURSE_UPDATE;

    constructor(public payload: { id: number, course: any }) { }
}

export class FetchCourseUpdateSuccess implements Action {
    readonly type = FETCH_COURSE_UPDATE_SUCCESS;

    constructor(public payload: any) { }

}

export class FetchCourseUpdateFail implements Action {
    readonly type = FETCH_COURSE_UPDATE_FAIL;

    constructor(public payload: any) { }
}

export class SetAuthors implements Action {
    readonly type = SET_AUTHORS;

    constructor(public payload: any) {}
}

export class ResetCurrentCourse implements Action {
    readonly type = RESET_CURRENT_COURSE;

}

export type CoursesActions =
    FetchCoursesSuccess |
    FetchCoursesFail |
    FetchCourses |

    ResetCurrentCourse |
    SetAuthors |

    FetchCourseUpdateSuccess |
    FetchCourseUpdateFail |
    FetchCourseUpdate |

    FetchCourseByIdSuccess |
    FetchCourseByIdFail |
    FetchCourseById |

    FetchCourseDeleteSuccess |
    FetchCourseDeleteFail |
    FetchCourseDelete |

    FetchCourseAddSuccess |
    FetchCourseAddFail |
    FetchCourseAdd;
