import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

import * as constants from '../../../constants/_const';

@Component({
    selector: 'app-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {
    backBtn = constants.buttonsNames.BACK;
    title = constants.common.NOT_FOUND;
    arrowIcon = faBackward;
}
