import { Injectable } from '@angular/core';

import * as models from '../models';

@Injectable({
    providedIn: 'root'
})
export class CourseItemsService {
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla';

    constructor() {
    }

    public getCourses(): models.ICourseItem[] {
        return [
            {
                id: 1,
                date: '11-14-2018',
                name: 'Course one',
                duration: 120,
                description: this.description,
                topRated: false
            },
            {
                id: 2,
                date: '11-14-2018',
                name: 'Course two',
                duration: 60,
                description: this.description,
                topRated: true
            },
            {
                id: 3,
                date: '11-11-2017',
                name: 'Course three',
                duration: 190,
                description: this.description,
                topRated: true
            },
            {
                id: 4,
                date: '03-01-2019',
                name: 'Course four',
                duration: 30,
                description: this.description,
                topRated: true
            },
            {
                id: 5,
                date: '11-11-2019',
                name: 'Course five',
                duration: 90,
                description: this.description,
                topRated: false
            },
            {
                id: 6,
                date: '11-11-2019',
                name: 'Course six',
                duration: 43,
                description: this.description,
                topRated: false
            }
        ];
    }
}
