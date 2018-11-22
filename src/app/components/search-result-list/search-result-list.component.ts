import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSearchResults, MoviesState } from '../../../store/reducers/movies';
import { IMovieItem } from '../../models';

@Component({
    selector: 'app-search-result-list',
    templateUrl: './search-result-list.component.html',
    styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
    movies$: Observable<IMovieItem[]>;

    constructor(private store: Store<MoviesState>) {
    }

    ngOnInit() {
        this.movies$ = this.store.select(getSearchResults);
    }
}
