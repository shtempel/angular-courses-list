import * as moviesActions from '../actions/movies';
import { IMovieItem } from '../../app/models';
import { createSelector } from '@ngrx/store';

export interface MoviesState {
    searchResult: IMovieItem[];
    searchToken: string;
    loading: boolean;
    loaded: boolean;
}

const initialState: MoviesState = {
    searchResult: [],
    searchToken: null,
    loading: false,
    loaded: false
};

export function movies(state = initialState, action: moviesActions.MoviesActions): MoviesState {
    switch (action.type) {

        case moviesActions.FETCHING_MOVIES: {
            return {
                ...state,
                searchToken: action.payload,
                loading: true
            };
        }

        case moviesActions.FETCHING_MOVIES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case moviesActions.FETCHING_MOVIES_SUCCESS: {
            console.log(action.payload);
            return {
                ...state,
                searchResult: action.payload,
                loading: false,
                loaded: true
            };
        }
        // case coursesActions.ADD_MOVIE_TO_LIBRARY_SUCCESS: {
        //     return [
        //         ...state,
        //         ...action.payload
        //     ];
        // }


        // case coursesActions.DELETE_MOVIE_SUCCESS: {
        //
        //     return state.filter((movie) => {
        //         return movie.id !== action.payload;
        //     });
        // }

        default: {
            return state;
        }
    }
}

// Selectors
export const getSearchToken = (state: MoviesState) => state.searchToken;

export const selectToken = createSelector(
    getSearchToken,
    (token: string) => {
        return token;
    }
);
