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
        case coursesActions.GET_MOVIES_SUCCESS: {
            return state;
        }

        case coursesActions.ADD_MOVIE_TO_LIBRARY_SUCCESS: {
            return [
                ...state,
                ...action.payload
            ];
        }
        case 'BLA':
            return console.log('bla');

        case coursesActions.DELETE_MOVIE_SUCCESS: {

            return state.filter((movie) => {
                return movie.id !== action.payload;
            });
        }

        default: {
            return state;
        }
    }
}
