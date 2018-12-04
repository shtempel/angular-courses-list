import { environment } from '../../environments/environment.prod';

import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer } from '@ngrx/store';

import * as fromPagination from './pagination';
import * as fromCourses from './courses';
import * as fromApp from './app';

export const reducers = {
    app: fromApp.reducer,
    router: routerReducer,
    courses: fromCourses.reducer,
    pagination: fromPagination.reducer
};

export const metaReducers: MetaReducer<{}>[] =
    !environment.production ? [storeFreeze] : [];
