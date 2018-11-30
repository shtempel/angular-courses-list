import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-authors-input',
    templateUrl: './authors-input.component.html',
    styleUrls: ['./authors-input.component.scss']
})
export class AuthorsInputComponent {
    @Input() form: FormGroup;
    @Input() errors: any;
}
