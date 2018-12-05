import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as assets from './../../../../../constants/_const';

@Component({
    selector: 'app-description-input',
    templateUrl: './description-input.component.html',
    styleUrls: ['./description-input.component.scss']
})
export class DescriptionInputComponent {
    @Input() form: FormGroup;
    @Input() errors: any;

    description = assets.common.DESCRIPTION;
}
