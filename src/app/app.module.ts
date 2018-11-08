import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';
import { LoadMoreComponent } from './components/courses-list/load-more/load-more.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { ToolPanelComponent } from './components/tool-panel/tool-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { reducers } from '../store';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        CoursesPageComponent,
        CoursesListComponent,
        CourseItemComponent,
        ToolPanelComponent,
        LoadMoreComponent,
        HeaderComponent,
        FooterComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
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
