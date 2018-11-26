import { Route } from '@angular/router';

import { AuthGuard } from './services/auth/auth.guards';

import { NotFoundPageComponent } from './pages/not-found-page';
import { CoursesPageComponent } from './pages/courses-page';
import { AddNewPageComponent } from './pages/add-new-page';
import { SearchPageComponent } from './pages/search-page';
import { LoginPageComponent } from './pages/login-page';

export const ROUTES: Route[] = [
    {path: 'login', component: LoginPageComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard]},
    {path: 'search/:searchQuery', component: SearchPageComponent, canActivate: [AuthGuard]},
    {path: 'movies/new', component: AddNewPageComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundPageComponent},
];
