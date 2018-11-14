import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as components from './components';
import * as pages from './pages';

import { metaReducers, reducers } from '../store';
import * as directives from './directives';
import * as  utils from './../utils/index';
import * as pipes from './pipes/index';
import { ROUTES } from './app.routes';

@NgModule({
    declarations: [
        components.BreadcrumbsComponent,
        components.CoursesListComponent,
        components.CourseItemComponent,
        components.ToolPanelComponent,
        components.LoadMoreComponent,
        components.HeaderComponent,
        components.FooterComponent,
        components.IconComponent,

        pages.EditCoursePageComponent,
        pages.NotFoundPageComponent,
        pages.CoursesPageComponent,
        pages.AddNewPageComponent,
        pages.LoginPageComponent,
        pages.TaskPageComponent,

        AppComponent,

        directives.HighlightBorderDirective,

        pipes.CourseDurationPipe,
        pipes.OrderByDatePipe
    ],
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
    providers: [{provide: RouterStateSerializer, useClass: utils.routerStore.CustomSerializer}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
