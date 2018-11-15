import { Component, OnInit } from '@angular/core';

import { CourseItemsService } from '../../services/course-items.service';
import * as assets from '../../../constants/_const';
import * as models from 'src/app/models';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
    public courses: models.ICourseItem[] = [];
    emptyListMessage = assets.common.NO_DATA;

    constructor(private coursesService: CourseItemsService) {
    }

    ngOnInit() {
        this.courses = this.coursesService.getCourses();
    }

    search(name) {
        const regexp = new RegExp(name, 'i');
        return this.courses.filter((course) => regexp.test(course.name));
    }
}
