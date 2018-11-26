import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as coursesActions from '../actions/courses';
import { ICourseItem } from '../../app/models';

export interface CoursesState {
    items: ICourseItem[];
    isFetching: boolean;
}

export const initialState: CoursesState = {
    items: [],
    isFetching: false,
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
