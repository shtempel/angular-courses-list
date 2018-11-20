import { Action } from '@ngrx/store';

import { IMovieItem } from '../../app/models';

// Actions
export const FETCHING_MOVIES_SUCCESS = 'FETCHING_MOVIES_SUCCESS';
export const FETCHING_MOVIES_FAIL = 'FETCHING_MOVIES_FAIL';
export const FETCHING_MOVIES = 'FETCHING_MOVIES';

//Action creators
export class FetchMovies implements Action {
    readonly type = FETCHING_MOVIES;

    constructor(public payload: string) {
    }
}

export class FetchMoviesSuccess implements Action {
    readonly type = FETCHING_MOVIES_SUCCESS;

    constructor(public payload: IMovieItem[]) {
    }
}

export class FetchMoviesFail implements Action {
    readonly type = FETCHING_MOVIES_FAIL;

    constructor(public payload: any) {
    }
}

export type MoviesActions = FetchMoviesFail | FetchMoviesSuccess | FetchMovies;
