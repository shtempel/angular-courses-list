import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';

import {NotFoundPageComponent, CoursesPageComponent, AddNewPageComponent, LoginPageComponent, EditCoursePageComponent} from './pages';
import {AppComponent} from './app.component';
import {
    BreadcrumbsComponent,
    CoursesListComponent,
    CourseItemComponent,
    ToolPanelComponent,
    LoadMoreComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent
} from './components';

import {ROUTES} from './app.routes';
import {reducers} from '../store';

@NgModule({
    declarations: [
        EditCoursePageComponent,
        NotFoundPageComponent,
        CoursesPageComponent,
        BreadcrumbsComponent,
        CoursesListComponent,
        AddNewPageComponent,
        CourseItemComponent,
        LoginPageComponent,
        ToolPanelComponent,
        LoadMoreComponent,
        HeaderComponent,
        FooterComponent,
        IconComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 5
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
