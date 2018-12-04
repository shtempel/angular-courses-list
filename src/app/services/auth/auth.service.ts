import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as appActions from './../../../store/actions/app';
import { App } from '../../models';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_PATH = 'http://localhost:3004/auth/login';
    private LOGIN_LS_KEY = 'mch_login';
    public isLoggedIn: boolean;

    constructor(
        private  appStore: Store<App>,
        private http: HttpClient,
        private router: Router
    ) { }

    login(login: string, password: string) {

        return this.http.post(`${this.API_PATH}`, {
            login,
            password
        }).pipe(
            map((res: Response) => {
                    const user: any = res;
                    localStorage.setItem(this.LOGIN_LS_KEY, user.token);
                    this.setIsLoggedIn(true);
                    return user.token;
                },
                catchError(error => Observable.throw(error.json()))
            ));
    }

    logoff(): void {
        localStorage.removeItem(this.LOGIN_LS_KEY);
        this.setIsLoggedIn(false);
        this.router.navigate(['/login']);
    }

    private setIsLoggedIn(value: boolean): void {
        this.isLoggedIn = value;
        this.appStore.dispatch(new appActions.SetAuthState({status: value}));
    }
}
