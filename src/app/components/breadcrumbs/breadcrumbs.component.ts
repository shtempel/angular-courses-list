import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
    currentLocation = this.router.url;

    constructor(private router: Router) {
    }
}
