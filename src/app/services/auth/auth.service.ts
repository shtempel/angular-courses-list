import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import * as localStorageHelper from './../../../utils/localStorageHelper';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    registerUser(loginName, password) {

        const myObservable = of(1, 2, 3);


        const user: any = {
            loginName,
            password
        };

        const dataFromStorage = localStorageHelper.getInfoFromStorage('registeredUsers');

        const data = dataFromStorage ? [...dataFromStorage] : [];
        if (_.find(data, {loginName})) {
            return false;
        } else {
            data.push(user);
            localStorageHelper.addInfoToStorage('registeredUsers', data);
            return true;
        }
    }
}



