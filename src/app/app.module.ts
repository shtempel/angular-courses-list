import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesListComponent,
    CourseItemComponent,
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
