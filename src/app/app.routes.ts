import { Route } from '@angular/router';

import { NotFoundPageComponent } from './pages/not-found-page';
import { CoursesPageComponent } from './pages/courses-page';
import { AddNewPageComponent } from './pages/add-new-page';

export const ROUTES: Route[] = [
    {path: '', redirectTo: 'courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesPageComponent},
    {path: 'courses/new', component: AddNewPageComponent},
    {path: '**', component: NotFoundPageComponent},
];
