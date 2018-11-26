import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as authActions from './../../store/actions/auth';
import * as fromServices from '../services/index';
import { map, switchMap } from 'rxjs/operators';


@Injectable()
export class AuthEffects {

    // @Effect()
    // userRegistration$ = this.actions$.ofType(authActions.USER_LOGIN_CHECK)
    //     .pipe(
    //         switchMap((action: authActions.AuthActions) => {
    //             return this.authService.checkUserLoginName(action.payload.login);
    //         })
    //     );

    constructor(private authService: fromServices.AuthService, private actions$: Actions) {
    }
}
