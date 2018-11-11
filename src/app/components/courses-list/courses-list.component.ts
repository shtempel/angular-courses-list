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

    constructor(private coursesService: CourseItemsService) {
    }

    ngOnInit() {
        this.courses = this.coursesService.getCourses();
    }
}
