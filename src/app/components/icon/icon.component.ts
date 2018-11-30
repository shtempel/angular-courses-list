import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input() className: string;
    @Input() iconType: string;
}
