import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-page',
    templateUrl: './task-page.component.html',
    styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
    stroka = '{{object.property}}';

    constructor() {
    }

    ngOnInit() {
    }

}
