import { Route } from '@angular/router';

import { EditCoursePageComponent } from './pages/edit-course-page';
import { NotFoundPageComponent } from './pages/not-found-page';
import { AuthResolver } from './services/auth/auth.resolver';
import { CoursesPageComponent } from './pages/courses-page';
import { AddNewPageComponent } from './pages/add-new-page';
import { LoginPageComponent } from './pages/login-page';
import { AuthGuard } from './services/auth/auth.guards';

export const ROUTES: Route[] = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'courses/new', component: AddNewPageComponent, canActivate: [AuthGuard]},
    {path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard]},
    {path: 'course/:id', component: EditCoursePageComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginPageComponent, resolve: [AuthResolver]},
    {path: '**', component: NotFoundPageComponent},
];
