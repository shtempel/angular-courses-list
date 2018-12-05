import { faTrashAlt, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import * as actions from './../../../../store/actions/courses';
import * as coursesService from './../../../services/courses';
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

    constructor(
        private coursesStore: Store<ICourseItem>,
        private courseService: coursesService.CoursesService
    ) { }

    @Input() public courseItem: models.ICourseItem;
    border;
    icons = {
        trashIcon: faTrashAlt,
        starIcon: faStar,
        editIcon: faEdit,
        classNameRegular: 'icon',
        classNameFav: 'fav-icon'
    };
    assets = {
        deleteConf: assets.common.DELETE_CONFIRMATION,
        delete: assets.buttonsNames.DELETE,
        edit: assets.buttonsNames.EDIT
    };

    ngOnInit() {
        this.border = utils.styleHelper.setBorder('dateRange', this.courseItem.releaseDate);
    }

    editCourse() {
        this.coursesStore.dispatch(new actions.FetchCourseById(this.courseItem.id));
    }

    setRating() {
        const state = !this.courseItem.topRated;
        this.courseService.setTopRated({...this.courseItem, topRated: state})
            .subscribe(
                () => {
                    this.coursesStore.dispatch(new actions.SetRating({id: this.courseItem.id, status: state}));
                },
                (error) => console.log(error));
    }

    deleteCourse() {
        if (confirm(this.assets.deleteConf + _.toUpper(this.courseItem.title) + '?')) {
            this.coursesStore.dispatch(new actions.FetchCourseDelete(this.courseItem.id));
        }
    }
}
