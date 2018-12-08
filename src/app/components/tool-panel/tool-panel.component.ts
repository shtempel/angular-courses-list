import { faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import * as coursesActions from '../../../store/actions/courses';
import { buttonsNames, common } from '../../../constants/_const';
import * as models from '../../models';

@Component({
    selector: 'app-tool-panel',
    templateUrl: './tool-panel.component.html',
    styleUrls: ['./tool-panel.component.scss']
})
export class ToolPanelComponent {
    inputValue = ' ';
    @Output() click: EventEmitter<string> = new EventEmitter<string>();
    icons = {
        searchIcon: faSearch,
        newIcon: faFileAlt,
        className: 'icon'
    };
    assets = {
        inputPlaceHolder: common.SEARCH_PLACE_HOLDER,
        addBtnTitle: buttonsNames.ADD_COURSE,
        searchBtnTitle: buttonsNames.SEARCH
    };

    constructor(private coursesStore: Store<models.ICourseItem>) { }

    onKeyUp(event: any) {
        this.inputValue = event.target.value;
    }

    onSearchClick() {
        this.coursesStore.dispatch(new coursesActions.FetchCourseSearch(this.inputValue));
    }
}
