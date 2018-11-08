import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {path: 'courses', component: CoursesPageComponent},
    {path: '', redirectTo: 'courses', pathMatch: 'full'}
];
