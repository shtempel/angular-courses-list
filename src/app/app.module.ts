import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as components from './components';
import * as pages from './pages';

import { ROUTES } from './app.routes';
import { reducers } from '../store';

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
