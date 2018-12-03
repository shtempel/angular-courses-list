import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';

import * as coursesActions from '../actions/courses';
import { IAuthor, ICourseItem } from '../../app/models';

export interface CoursesState {
    items: ICourseItem[];
    item: ICourseItem;
    isFetching: boolean;
}

export const initialState: CoursesState = {
    items: [],
    item: {
        id: null,
        title: null,
        duration: null,
        releaseDate: null,
        authors: [],
        description: null,
        topRated: null
    },
    isFetching: false
};

export function reducer(state = initialState, action: coursesActions.CoursesActions): CoursesState {
    switch (action.type) {

        case coursesActions.FETCHING_COURSES: {
            return {
                ...state,
                isFetching: true
            };
        }

        case coursesActions.FETCHING_COURSES_FAIL: {
            return {
                ...state,
                isFetching: false
            };
        }

        case coursesActions.FETCHING_COURSES_SUCCESS: {
            return {
                ...state,
                items: action.payload,
                isFetching: false
            };
        }

        case coursesActions.FETCH_COURSE_BY_ID: {
            return {
                ...state,
                isFetching: true
            };
        }

        case coursesActions.FETCH_COURSE_BY_ID_FAIL: {
            return {
                ...state,
                isFetching: false
            };
        }

        case coursesActions.FETCH_COURSE_BY_ID_SUCCESS: {
            action.payload = {
                id: action.payload.id,
                title: action.payload.name,
                duration: action.payload.length,
                releaseDate: moment(action.payload.date).format('YYYY-MM-DD'),
                authors: action.payload.authors,
                description: action.payload.description,
                topRated: action.payload.isTopRated
            };
            return {
                ...state,
                item: action.payload,
                isFetching: false
            };
        }

        case coursesActions.RESET_CURRENT_COURSE: {
            return {
                ...state,
                item: {
                    id: null, title: null, duration: null, releaseDate: null, authors: null, description: null, topRated: null
                }
            };
        }

        case coursesActions.SET_AUTHORS: {
            return {
                ...state,
                item: {...state.item, authors: action.payload}
            };
        }

        case coursesActions.REMOVE_AUTHOR: {
            const authors: IAuthor[] = state.item.authors.filter((author: IAuthor) => author.id !== action.payload);
            return {
                ...state,
                item: {...state.item, authors: authors}
            };
        }

        case coursesActions.FETCH_COURSE_DELETE_SUCCESS: {
            return {
                ...state,
                items: state.items.filter(course => course.id !== action.payload),
                isFetching: false
            };
        }

        case coursesActions.FETCH_COURSE_DELETE_FAIL: {
            return {
                ...state,
                isFetching: false
            };
        }

        case coursesActions.FETCH_COURSE_DELETE: {
            return {
                ...state,
                isFetching: true
            };
        }

        case coursesActions.FETCH_COURSE_ADD: {
            return {
                ...state,
                isFetching: true
            };
        }

        default: {
            return state;
        }
    }
}

// Selectors

export const getCoursesState = createFeatureSelector<CoursesState>(
    'courses'
);

export const getCourses = createSelector(
    getCoursesState,
    (state: CoursesState) => state.items
);

export const getCourse = createSelector(
    getCoursesState,
    (state: CoursesState) => state.item
);

export const getAuthors = createSelector(
    getCoursesState,
    (state: CoursesState) => state.item.authors
);
