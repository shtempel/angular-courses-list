import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as assets from './../../../../../constants/_const';
@Component({
    selector: 'app-title-input',
    templateUrl: './title-input.component.html',
    styleUrls: ['./title-input.component.scss'],
})
export class TitleInputComponent {
    @Input() form: FormGroup;
    @Input() errors: any;
    title = assets.common.TITLE;
}
