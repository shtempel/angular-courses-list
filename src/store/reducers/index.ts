import { environment } from '../../environments/environment.prod';

import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer } from '@ngrx/store';

import * as fromMovies from './movies';
import * as fromApp from './app';


export const reducers = {
    app: fromApp.app,
    router: routerReducer,
    movies: fromMovies.movies
};

export const metaReducers: MetaReducer<{}>[] =
    !environment.production ? [storeFreeze] : [];
