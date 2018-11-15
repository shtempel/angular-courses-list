import { routerReducer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer } from '@ngrx/store';

import * as fromApp from './app/reducer';

import { environment } from '../environments/environment.prod';

export const reducers = {
    app: fromApp.reducer,
    router: routerReducer
};

export const metaReducers: MetaReducer<{}>[] =
    !environment.production ? [storeFreeze] : [];
