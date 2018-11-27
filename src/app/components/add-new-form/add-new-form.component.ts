import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as coursesActions from '../../../store/actions/courses';
import { ICourseItem } from '../../models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-add-new-form',
    templateUrl: './add-new-form.component.html',
    styleUrls: ['./add-new-form.component.scss']
})
export class AddNewFormComponent implements OnInit {
    courseForm: FormGroup;

    constructor(private coursesStore: Store<ICourseItem>, private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    addCourse(formData: any): void {
        if (formData) {
            this.coursesStore.dispatch(new coursesActions.FetchCourseAdd({...formData}));
        }
    }

    createForm(): void {
        this.courseForm = this.fb.group({
            'name': ['', Validators.required]
        });
    }
}
