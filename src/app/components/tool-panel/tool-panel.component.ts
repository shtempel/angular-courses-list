import { faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { buttonsNames, common } from '../../../constants/_const';
import { IMovieItem } from '../../models';
import * as moviesActions from './../../../store/actions/movies';
import { map } from 'rxjs/operators';

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

    constructor(private store: Store<IMovieItem>) {
    }

    ngOnInit() {
    }

    onKeyUp(event: any) {
        this.inputValue = event.target.value;

    }

    onSearchClick() {
        this.store.dispatch(new moviesActions.FetchMovies(this.inputValue));
    }
}
