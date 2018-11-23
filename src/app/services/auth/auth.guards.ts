import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    isLogged;

    constructor(private router: Router, appStore: Store<any>) {
        appStore.subscribe(
            (state) => this.isLogged = state.app.isAuthorized);
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.isLogged) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
