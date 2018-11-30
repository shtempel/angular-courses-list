import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { getAuthors } from '../../../../../store/reducers/courses';
import { ICourseItem } from '../../../../models';
import * as models from '../../../../models';

@Component({
    selector: 'app-authors-input',
    templateUrl: './authors-input.component.html',
    styleUrls: ['./authors-input.component.scss']
})
export class AuthorsInputComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() errors: any;
    authors;
    cross = faTimes;
    styles = {
        icon: 'icon'
    };

    constructor(private coursesStore: Store<ICourseItem>) { }

    ngOnInit() {
        this.coursesStore.pipe(select(getAuthors)).subscribe(
            items => {
                this.authors = items;
            }
        );
    }

    log() {
        console.log(this.authors);
    }
}
