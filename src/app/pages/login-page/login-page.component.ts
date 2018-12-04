import { Component, OnInit } from '@angular/core';

import * as assets from './../../../constants/_const';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    wrongCredentials;
    assets = {
        passPlaceHolder: assets.common.PLEASE_ENTER_PASSWORD,
        loginPlaceHolder: assets.common.PLEASE_ENTER_LOGIN,
        pass: assets.common.PASSWORD,
        login: assets.common.LOGIN
    };

    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.createForm();
    }


    login() {
        const controls = this.loginForm.controls;
        Object.keys(controls).forEach(key => {
            controls[key].markAsTouched();
        });

        this.authService.login(controls.login.value, controls.password.value)
            .subscribe(
                () => this.router.navigate(['/courses']),
                () => this.wrongCredentials = true
            );
    }

    createForm(): void {
        this.loginForm = this.fb.group({
            login: [null, [Validators.required]],
            password: [null, Validators.required],
        });
    }
}
