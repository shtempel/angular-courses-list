import { CoursesPageComponent, TaskPageComponent } from './pages';
import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {path: 'courses', component: CoursesPageComponent},
    {path: 'task', component: TaskPageComponent},
    {path: '', redirectTo: 'courses', pathMatch: 'full'}
];
