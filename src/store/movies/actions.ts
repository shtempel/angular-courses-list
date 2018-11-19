import { Action } from '@ngrx/store';
import { ICourseItem } from '../../app/models';

export const ADD_MOVIE_TO_LIBRARY_SUCCESS = 'ADD_MOVIE_TO_LIBRARY_SUCCESS';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';


export class GetCourses implements Action {
    readonly type = GET_MOVIES_SUCCESS;

    constructor(public payload: { movies: any }) {
    }
}
export class Bla implements Action {
    readonly type = 'BLA';

    constructor() {
    }
}
export class AddMovieToLibrary implements Action {
    readonly type = ADD_MOVIE_TO_LIBRARY_SUCCESS;

    constructor(public payload: ICourseItem[]) {
    }
}

export class DeleteCourses implements Action {
    readonly type = DELETE_MOVIE_SUCCESS;

    constructor(public payload: number) {
    }
}

export type Actions = GetCourses | AddMovieToLibrary | DeleteCourses | Bla;
