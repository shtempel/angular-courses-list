import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import * as actions from './../../../../store/actions/courses';
import * as assets from '../../../../constants/_const';
import { ICourseItem } from 'src/app/models';
import * as utils from '../../../../utils';
import * as models from 'src/app/models';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

    constructor(private coursesStore: Store<ICourseItem>) {
    }

    @Input() public courseItem: models.ICourseItem;
    @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();
    border;
    icons = {
        trashIcon: faTrashAlt,
        starIcon: faStar,
        editIcon: faEdit,
        classNameRegular: 'icon',
        classNameFav: 'fav-icon'
    };
    assets = {
        delete: assets.buttonsNames.DELETE,
        edit: assets.buttonsNames.EDIT
    };

    ngOnInit() {
        this.border = utils.styleHelper.setBorder('dateRange', this.courseItem.releaseDate);
    }

    deleteCourse() {
        this.coursesStore.dispatch(new actions.FetchCourseDelete(this.courseItem.id));
    }
}
