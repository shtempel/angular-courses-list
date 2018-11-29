import { Component, Input, OnInit } from '@angular/core';
import * as assets from '../../../../constants/_const';
import * as moment from 'moment';

@Component({
    selector: 'app-generic-form-control',
    templateUrl: './generic-form-control.component.html',
    styleUrls: ['./generic-form-control.component.scss']
})
export class GenericFormControlComponent implements OnInit {
    @Input() form: string;
    @Input() type: string;
    errors = {
        maxNameLength: assets.errors.MAX_LENGTH + 50,
        minNameLength: assets.errors.MIN_LENGTH + 3,
        maxDescriptionLength: assets.errors.MAX_LENGTH + 500,
        required: assets.errors.REQUIRED_FIELD
    };

    constructor() { }

    ngOnInit() {
    }

}
