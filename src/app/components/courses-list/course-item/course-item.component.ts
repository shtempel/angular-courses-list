import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';

import * as assets from '../../../../constants/_const';
import * as utils from '../../../../utils';
import * as models from 'src/app/models';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

    constructor() {
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
        console.log(this.courseItem.id);
    }
}
