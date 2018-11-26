import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { App } from '../../models';

@Injectable()
export class AuthGuard implements CanActivate {
    isLogged;

    constructor(private router: Router, appStore: Store<App>) {
        appStore.subscribe(
            (state) => this.isLogged = state.app.isAuthorized);
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.isLogged) {
            this.router.navigate([ '/login' ]);
            return false;
        } else if (this.isLogged) {
            this.router.navigate([ '/courses' ]);
            return true;
        }
        return true;
    }
}
