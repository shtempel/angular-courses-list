import { Component, Input, OnInit } from '@angular/core';

import { ICourseItem } from 'src/app/models/course-item';
import { common } from './../../../../constants/_const';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: ICourseItem;
  buttonsNames = {
    delete: common.DELETE,
    edit: common.EDIT
  };
  constructor() {
  }

  ngOnInit() {
  }

}
