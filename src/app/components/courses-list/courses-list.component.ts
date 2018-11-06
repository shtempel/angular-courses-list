import { Component, OnInit } from '@angular/core';

import { ICourseItem } from 'src/app/models/course-item';
import { CourseItemsService } from './../../services/course-items.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: ICourseItem[] = [];

  constructor(private coursesServise: CourseItemsService) { }

  ngOnInit() {
    this.courses = this.coursesServise.getCourses();
  }

}
