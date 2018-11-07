import { BrowserModule } from '@angular/platform-browser';
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
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
