import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { components } from './components';
import { effects } from './effects';
import { pages } from './pages';

import { metaReducers, reducers } from '../store/reducers';
import { AuthGuard } from './services/auth/auth.guards';
import { directives } from './directives';
import * as utils from './../utils/index';
import { ROUTES } from './app.routes';
import { pipes } from './pipes';

const declarations = [
    AppComponent,
    ...components,
    ...directives,
    ...pages,
    ...pipes
];

@NgModule({
    declarations: [ ...declarations ],
    imports: [
        BrowserModule,
        HttpClientModule,
        EffectsModule.forRoot([ ...effects ]),
        FontAwesomeModule,
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot(reducers, {metaReducers}),
        StoreDevtoolsModule.instrument({
            maxAge: 15
        }),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'})
    ],
    providers: [
        {provide: RouterStateSerializer, useClass: utils.routerStore.CustomSerializer},
        AuthGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
