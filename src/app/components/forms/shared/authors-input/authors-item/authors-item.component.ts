import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-authors-item',
    templateUrl: './authors-item.component.html',
    styleUrls: ['./authors-item.component.scss']
})
export class AuthorsItemComponent {
    @Input() authorItem;
    @Input() form: FormGroup;
    @Input() errors: any;
    cross = faTimes;
    styles = {
        icon: 'icon'
    };

    log() {
        console.log(this);
    }
}
