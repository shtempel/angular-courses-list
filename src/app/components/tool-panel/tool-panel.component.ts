import { faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

import { buttonsNames, common } from '../../../constants/_const';

@Component({
    selector: 'app-tool-panel',
    templateUrl: './tool-panel.component.html',
    styleUrls: ['./tool-panel.component.scss']
})
export class ToolPanelComponent implements OnInit {
    icons = {
        newIcon: faFileAlt,
        searchIcon: faSearch,
        className: 'icon'
    };
    assets = {
        addBtnTitle: buttonsNames.ADD_COURSE,
        searchBtnTitle: buttonsNames.SEARCH,
        inputPlaceHolder: common.SEARCH_PLACE_HOLDER
    };

    constructor() {
    }

    ngOnInit() {
    }
}
