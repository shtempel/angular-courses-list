import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';


import * as appActions from './../../../store/actions/app';
import { Router } from '@angular/router';
import { App } from '../../models';

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
                }
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
