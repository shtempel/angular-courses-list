import { Route } from '@angular/router';

import { NotFoundPageComponent } from './pages/not-found-page';
import { CoursesPageComponent } from './pages/courses-page';
import { AddNewPageComponent } from './pages/add-new-page';
import { SearchPageComponent } from './pages/search-page';

export const ROUTES: Route[] = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', component: CoursesPageComponent},
    {path: 'search/:searchQuery', component: SearchPageComponent},
    {path: 'movies/new', component: AddNewPageComponent},
    {path: '**', component: NotFoundPageComponent},
];
