import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

import {buttonsNames} from '../../../../constants/_const';
import {ICourseItem} from 'src/app/models/course-item';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
    @Input() public courseItem: ICourseItem;
    @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();
    icons = {
        trashIcon: faTrashAlt,
        editIcon: faEdit,
        className: 'icon'
    };
    buttonsNames = {
        delete: buttonsNames.DELETE,
        edit: buttonsNames.EDIT
    };

    constructor() {
    }

    ngOnInit() {
    }

    deleteCourse() {
        console.log(this.courseItem.id);
    }
}
