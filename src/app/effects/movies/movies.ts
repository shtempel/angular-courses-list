import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as moviesActions from './../../../store/actions/movies';
import * as fromServices from './../../services/';
import { select, Store } from '@ngrx/store';
import { MoviesState } from '../../../store/reducers/movies';
import * as fromMoviesReducer from './../../../store/reducers/movies';

@Injectable()
export class MoviesEffects {
    searchToken: Observable<string>;
    token;

    @Effect()
    loadMovies$ = this.actions$.ofType(moviesActions.FETCHING_MOVIES)
        .pipe(
            switchMap(() => {
                return this.moviesService.searchMovies(this.token)
                    .pipe(
                        map(movies => new moviesActions.FetchMoviesSuccess(movies.data.map(
                            movie => {
                                return {
                                    id: movie.id,
                                    title: movie.title,
                                    voteAverage: movie.vote_average,
                                    releaseDate: movie.release_date,
                                    overview: movie.overview,
                                    runtime: movie.runtime,
                                    posterPath: movie.poster_path
                                };
                            }
                        ))),
                        catchError(error => of(new moviesActions.FetchMoviesFail(error)))
                    );
            })
        );

    constructor(private actions$: Actions, private moviesService: fromServices.MoviesService, private store: Store<MoviesState>) {
        this.searchToken = this.store.pipe(select(fromMoviesReducer.selectToken));
        this.searchToken
            .subscribe(total => {
                this.token = total;
            });
    }
}
