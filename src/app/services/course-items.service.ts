import { Injectable } from '@angular/core';

import { ICourseItem } from './../models/course-item';

@Injectable({
  providedIn: 'root'
})
export class CourseItemsService {

  constructor() { }
  public getCourses(): ICourseItem[] {
    return [
      {
        id: 1,
        date: '10-10-2018',
        name: 'Course 1',
        duration: 120,
        description: 'Description'
      },
      {
        id: 2,
        date: '11-11-2018',
        name: 'Course 2',
        duration: 130,
        description: 'Description 2'
      }
    ];
  }
}
