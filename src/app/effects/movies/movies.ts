import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as moviesActions from './../../../store/actions/movies';
import * as fromServices from './../../services/';
import * as moment from 'moment';

@Injectable()
export class MoviesEffects {

    @Effect()
    loadMovies$ = this.actions$.ofType(moviesActions.FETCHING_MOVIES)
        .pipe(
            switchMap((action: moviesActions.MoviesActions) => {
                return this.moviesService.searchMovies(action.payload)
                    .pipe(
                        map(movies => new moviesActions.FetchMoviesSuccess(movies.data.map(
                            movie => {
                                return {
                                    id: movie.id,
                                    title: movie.title,
                                    voteAverage: movie.vote_average,
                                    releaseDate: moment(movie.release_date).format('MM/DD/YYYY'),
                                    overview: movie.overview,
                                    runtime: movie.runtime,
                                    posterPath: movie.poster_path,
                                    genres: movie.genres
                                };
                            }
                        ))),
                        catchError(error => of(new moviesActions.FetchMoviesFail(error)))
                    );
            })
        );

    constructor(private actions$: Actions, private moviesService: fromServices.MoviesService) {

    }
}
