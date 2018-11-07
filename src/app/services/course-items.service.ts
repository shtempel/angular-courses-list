import { Injectable } from '@angular/core';

import { ICourseItem } from '../models/course-item';

@Injectable({
    providedIn: 'root'
})
export class CourseItemsService {

    constructor() {
    }

    public getCourses(): ICourseItem[] {
        return [
            {
                id: 1,
                date: '10-10-2018',
                name: 'Course 1',
                duration: 120,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
                    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla' +
                    ' pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
                    'laborum'
            },
            {
                id: 2,
                date: '11-11-2018',
                name: 'Course 2',
                duration: 130,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
                    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est' +
                    ' laborum'
            },
            {
                id: 3,
                date: '11-11-2018',
                name: 'Course 2',
                duration: 130,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
                    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est' +
                    ' laborum'
            },
            {
                id: 4,
                date: '11-11-2018',
                name: 'Course 2',
                duration: 130,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
                    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est' +
                    ' laborum'
            },
            {
                id: 5,
                date: '11-11-2018',
                name: 'Course 2',
                duration: 130,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
                    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est' +
                    ' laborum'
            },
            {
                id: 6,
                date: '11-11-2018',
                name: 'Course 2',
                duration: 130,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
                    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est' +
                    ' laborum'
            }
        ];
    }
}
