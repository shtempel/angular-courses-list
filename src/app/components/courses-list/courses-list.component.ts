import { Component, OnInit } from '@angular/core';

import { CourseItemsService } from '../../services/course-items.service';
import { ICourseItem } from 'src/app/models/course-item';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    public courses: ICourseItem[] = [];

    constructor(private coursesServise: CourseItemsService) {
    }

    ngOnInit() {
        this.courses = this.coursesServise.getCourses();
    }
}
