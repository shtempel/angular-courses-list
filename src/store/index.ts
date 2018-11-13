import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer } from '@ngrx/store';

import { environment } from '../environments/environment.prod';

import * as fromApp from './app/reducer';

export const reducers = {
    app: fromApp.reducer,
    router: routerReducer
};

export const metaReducers: MetaReducer<{}>[] =
    !environment.production ? [storeFreeze] : [];
