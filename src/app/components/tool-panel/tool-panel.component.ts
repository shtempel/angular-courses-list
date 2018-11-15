import { faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { buttonsNames, common } from '../../../constants/_const';

@Component({
    selector: 'app-tool-panel',
    templateUrl: './tool-panel.component.html',
    styleUrls: ['./tool-panel.component.scss']
})
export class ToolPanelComponent implements OnInit {
    inputValue;
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

    constructor() {
    }

    ngOnInit() {
    }

    onKeyUp(event: any) {
        this.inputValue = event.target.value;
    }

    onSearchClick() {
        !this.inputValue ? console.log('You should type something in input first') : console.log(this.inputValue);
    }
}
