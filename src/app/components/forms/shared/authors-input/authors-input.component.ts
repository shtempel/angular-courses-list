import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';


import * as coursesActions from '../../../../../store/actions/courses';
import { getAuthors } from '../../../../../store/reducers/courses';
import * as authorsService from '../../../../services/authors';
import * as assets from './../../../../../constants/_const';
import { ICourseItem } from '../../../../models';

@Component({
    selector: 'app-authors-input',
    templateUrl: './authors-input.component.html',
    styleUrls: ['./authors-input.component.scss']
})
export class AuthorsInputComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() errors: any;
    authors;
    query;
    autocompleteAuthors;
    cross = faTimes;
    styles = {
        icon: 'icon'
    };

    authorsTitle = assets.common.AUTHORS;

    constructor(
        private authorsSer: authorsService.AuthorsService,
        private coursesStore: Store<ICourseItem>
    ) { }

    ngOnInit() {
        this.coursesStore.pipe(select(getAuthors)).subscribe(
            items => {
                this.authors = items;
            }
        );
    }

    searchAuthors() {
        this.authorsSer.searchAuthors(this.query)
            .subscribe(res => {
                if (res) {
                    this.autocompleteAuthors = res;
                }
            });
    }

    addAuthor(author) {
        this.coursesStore.dispatch(new coursesActions.SetAuthors(author));
    }

    removeAuthor(author) {
        this.coursesStore.dispatch(new coursesActions.RemoveAuthor(author.id));
    }
}
