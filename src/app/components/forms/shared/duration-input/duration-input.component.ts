import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-duration-input',
    templateUrl: './duration-input.component.html',
    styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent {
    @Input() form: FormGroup;
    @Input() errors: any;
}
