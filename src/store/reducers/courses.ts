import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';

import * as coursesActions from '../actions/courses';
import { ICourseItem } from '../../app/models';

export interface CoursesState {
    items: ICourseItem[];
    item: ICourseItem;
    isFetching: boolean;
    searchString: string;
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
    isFetching: false,
    searchString: ''
};

export function reducer(state = initialState, action: coursesActions.CoursesActions): CoursesState {
    switch (action.type) {

        case coursesActions.FETCH_COURSE_ADD:
        case coursesActions.FETCH_COURSE_DELETE:
        case coursesActions.FETCH_COURSE_SEARCH:
        case coursesActions.FETCH_COURSE_BY_ID:
        case coursesActions.FETCHING_COURSES: {
            return {
                ...state,
                isFetching: true
            };
        }

        case coursesActions.FETCH_COURSE_DELETE_FAIL:
        case coursesActions.FETCH_COURSE_BY_ID_FAIL:
        case coursesActions.FETCH_COURSE_SEARCH_FAIL:
        case coursesActions.FETCHING_COURSES_FAIL: {
            return {
                ...state,
                isFetching: false
            };
        }
        case coursesActions.FETCH_COURSE_SEARCH_SUCCESS:
        case coursesActions.FETCHING_COURSES_SUCCESS: {
            return {
                ...state,
                items: action.payload,
                isFetching: false
            };
        }

        case coursesActions.FETCH_COURSE_BY_ID_SUCCESS: {
            return {
                ...state,
                item: {...action.payload, releaseDate: moment(action.payload.releaseDate).format('YYYY-MM-DD')},
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
                item: {
                    ...state.item,
                    authors: [...state.item.authors, action.payload]
                }
            };
        }

        case coursesActions.REMOVE_AUTHOR: {
            return {
                ...state,
                item: {...state.item, authors: state.item.authors.filter((author) => author.id !== action.payload)}
            };
        }

        case coursesActions.SET_RATING: {
            return {
                ...state,
                items: [
                    ...state.items.map(item => {
                        return item.id === action.payload.id ?
                            {...item, topRated: action.payload.status} : item;
                    })
                ]
            };
        }

        case coursesActions.FETCH_COURSE_DELETE_SUCCESS: {
            return {
                ...state,
                items: state.items.filter(course => course.id !== action.payload),
                isFetching: false
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
