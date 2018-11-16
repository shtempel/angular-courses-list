import { Action } from '@ngrx/store';
import { ICourseItem } from '../../app/models';

export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';


export class GetCourses implements Action {
    readonly type = GET_COURSES_SUCCESS;

    constructor(public payload: { courses: any }) {
    }
}

export class AddCourses implements Action {
    readonly type = ADD_COURSE_SUCCESS;

    constructor(public payload: ICourseItem[]) {
    }
}

export class DeleteCourses implements Action {
    readonly type = DELETE_COURSE_SUCCESS;

    constructor(public payload: number) {
    }
}

export type Actions = GetCourses | AddCourses | DeleteCourses;
