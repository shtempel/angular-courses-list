import { Component, Input, OnInit } from '@angular/core';

import { buttonsNames } from '../../../../constants/_const';
import { ICourseItem } from 'src/app/models/course-item';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
    @Input() public courseItem: ICourseItem;
    buttonsNames = {
        delete: buttonsNames.DELETE,
        edit: buttonsNames.EDIT
    };

    constructor() {
    }

    ngOnInit() {
    }
}
