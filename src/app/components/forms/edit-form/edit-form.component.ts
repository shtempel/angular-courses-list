import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';

import * as coursesActions from '../../../../store/actions/courses';
import { getCourse } from '../../../../store/reducers/courses';
import * as assets from '../../../../constants/_const';
import { ICourseItem } from '../../../models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
    public course$: Observable<ICourseItem>;
    editForm: FormGroup;
    courseId;
    assets = {
        cancel: assets.buttonsNames.CANCEL,
        update: assets.buttonsNames.UPDATE_COURSE
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
        this.course$ = this.coursesStore.pipe(select(getCourse));
        this.course$.subscribe(res => {
            if (res) {
                this.createForm(res);
                this.courseId = res.id;
            }
        });
    }

    updateCourse(id: number, formData: any): void {
        const controls = this.editForm.controls;

        Object.keys(controls).forEach(key => {
            controls[key].markAsTouched();
        });

        if (formData) {
            this.coursesStore.dispatch(new coursesActions.FetchCourseUpdate(
                {
                    id: this.courseId,
                    course: {
                        name: formData.title,
                        description: formData.description,
                        length: formData.duration,
                        date: formData.date
                    }
                }
            ));
            this.location.back();
        }
    }

    createForm(course: ICourseItem): void {
        this.editForm = this.fb.group({
            title: [course.title, Validators.compose(
                [
                    Validators.required,
                    Validators.maxLength(50),
                    Validators.minLength(3)
                ])],
            description: [course.description, Validators.compose(
                [
                    Validators.required,
                    Validators.maxLength(500)
                ])],
            duration: [course.duration, Validators.compose(
                [
                    Validators.required,
                    Validators.pattern(/^[0-9]*$/)]),
            ],
            date: [course.releaseDate, [Validators.required]]
        });
    }
}
