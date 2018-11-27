import { Route } from '@angular/router';

import { EditCoursePageComponent } from './pages/edit-course-page';
import { NotFoundPageComponent } from './pages/not-found-page';
import { CoursesPageComponent } from './pages/courses-page';
import { AddNewPageComponent } from './pages/add-new-page';
import { LoginPageComponent } from './pages/login-page';

export const ROUTES: Route[] = [
    {path: 'login', component: LoginPageComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'courses', component: CoursesPageComponent},
    {path: 'course/:id', component: EditCoursePageComponent},
    {path: 'courses/new', component: AddNewPageComponent},
    {path: '**', component: NotFoundPageComponent},
];
