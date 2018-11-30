import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,  OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import * as coursesActions from '../../../../store/actions/courses';
import * as assets from '../../../../constants/_const';
import { ICourseItem } from '../../../models';

@Component({
    selector: 'app-add-new-form',
    templateUrl: './add-new-form.component.html',
    styleUrls: ['./add-new-form.component.scss']
})
export class AddNewFormComponent implements OnInit {
    courseForm: FormGroup;
    assets = {
        cancel: assets.buttonsNames.CANCEL,
        save: assets.buttonsNames.SAVE
    };
    errors = {
        maxNameLength: assets.errors.MAX_LENGTH + 50,
        minNameLength: assets.errors.MIN_LENGTH + 3,
        maxDescriptionLength: assets.errors.MAX_LENGTH + 500,
        required: assets.errors.REQUIRED_FIELD
    };
    constructor(
        private coursesStore: Store<ICourseItem>,
        private location: Location,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.createForm();
    }

    save(formData: any): void {
        const controls = this.courseForm.controls;
        Object.keys(controls).forEach(key => {
            controls[key].markAsTouched();
        });

        if (formData) {
            this.coursesStore.dispatch(new coursesActions.FetchCourseAdd(
                {
                    name: formData.title,
                    description: formData.description,
                    length: formData.duration,
                    date: formData.date
                }
            ));
            this.location.back();
        }
    }

    createForm(): void {
        this.courseForm = this.fb.group({
            title: [null, Validators.compose(
                [
                    Validators.required,
                    Validators.maxLength(50),
                    Validators.minLength(3)
                ])],
            description: [null, Validators.compose(
                [
                    Validators.required,
                    Validators.maxLength(500)
                ])],
            duration: [null, Validators.compose(
                [
                    Validators.required,
                    Validators.pattern(/^[0-9]*$/)]),
            ],
            date: [null, [Validators.required]]
        });
    }
}
