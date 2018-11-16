import * as coursesActions from './actions';
import { ICourseItem } from '../../app/models';

const initialState = [
    {
        id: 1,
        date: '11-14-2018',
        name: 'Course one',
        duration: 120,
        description: ' this.description',
        topRated: false
    },
    {
        id: 2,
        date: '11-14-2018',
        name: 'Course two',
        duration: 60,
        description: 'this.description',
        topRated: true
    }
];

export function reducer(state = initialState, action: coursesActions.Actions) {
    switch (action.type) {
        case coursesActions.GET_COURSES_SUCCESS: {
            return state;
        }

        case coursesActions.ADD_COURSE_SUCCESS: {
            return [
                ...state,
                ...action.payload
            ];
        }

        case coursesActions.DELETE_COURSE_SUCCESS: {

            return state.filter((course) => {
                return course.id !== action.payload;
            });
        }

        default: {
            return state;
        }
    }
}
