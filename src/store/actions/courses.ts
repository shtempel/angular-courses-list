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

// Searching
export const FETCH_COURSE_SEARCH_SUCCESS = 'FETCH_COURSE_SEARCH_SUCCESS';
export const FETCH_COURSE_SEARCH_FAIL = 'FETCH_COURSE_SEARCH_FAIL';
export const FETCH_COURSE_SEARCH = 'FETCH_COURSE_SEARCH';

// Common
export const RESET_CURRENT_COURSE = 'RESET_CURRENT_COURSE';
export const REMOVE_AUTHOR = 'REMOVE_AUTHOR';
export const SET_AUTHORS = 'SET_AUTHORS';
export const SET_RATING = 'SET_RATING';

// Action creators
export class FetchCourses implements Action {
    readonly type = FETCHING_COURSES;

    constructor(public payload: { limit: number }) { }
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

export class FetchCourseSearch implements Action {
    readonly type = FETCH_COURSE_SEARCH;

    constructor(public payload: any) { }
}

export class FetchCourseSearchSuccess implements Action {
    readonly type = FETCH_COURSE_SEARCH_SUCCESS;

    constructor(public payload: ICourseItem[]) { }

}

export class FetchCourseSearchFail implements Action {
    readonly type = FETCH_COURSE_SEARCH_FAIL;

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

    constructor(public payload: any) { }
}

export class SetRating implements Action {
    readonly type = SET_RATING;

    constructor(public payload: { id: number, status: boolean }) { }
}

export class RemoveAuthor implements Action {
    readonly type = REMOVE_AUTHOR;

    constructor(public payload: any) { }
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
    RemoveAuthor |
    SetRating |

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
    FetchCourseAdd |

    FetchCourseSearchSuccess |
    FetchCourseSearchFail |
    FetchCourseSearch;
