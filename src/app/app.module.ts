import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { components } from './components';
import { pages } from './pages';

import { metaReducers, reducers } from '../store';
import { directives } from './directives';
import * as utils from './../utils/index';
import { ROUTES } from './app.routes';
import { pipes } from './pipes';
import { CourseItemsService } from './services/course-items.service';

const declarations = [
    AppComponent,
    ...components,
    ...directives,
    ...pages,
    ...pipes
];

@NgModule({
    declarations: [...declarations],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot(reducers, {metaReducers}),
        StoreDevtoolsModule.instrument({
            maxAge: 5
        }),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'})
    ],
    providers: [
        {provide: RouterStateSerializer, useClass: utils.routerStore.CustomSerializer},
        {provide: CourseItemsService, useClass: CourseItemsService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
