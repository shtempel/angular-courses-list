import { Injectable } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import * as moviesActions from './../../../store/movies/actions';
import * as appActions from './../../../store/app/actions';
import { App } from '../../models';

@Injectable()
export class MoviesEffects {

    @Effect()
    searchMovies = this.actions.ofType(moviesActions.GET_MOVIES_SUCCESS).pipe(
        mergeMap(() => {
            return this.moviesService
                .searchMovies()
                .pipe(
                    map(() => new moviesActions.Bla())
                );
        })
    );

    constructor(
        private actions: Actions,
        private moviesService: MoviesService,
        private  store: Store<App>) {
    }
}
