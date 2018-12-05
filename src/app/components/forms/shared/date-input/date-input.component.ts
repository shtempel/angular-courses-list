import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as assets from './../../../../../constants/_const';

@Component({
    selector: 'app-date-input',
    templateUrl: './date-input.component.html',
    styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
    @Input() form: FormGroup;
    @Input() errors: any;

    releaseDate = assets.common.RELEASE_DATE;
}
