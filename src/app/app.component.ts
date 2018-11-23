import { Component, OnInit } from '@angular/core';
import * as localStorageHelper from './../utils/localStorageHelper';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    movie = [
        {
            id: 337167,
            title: 'Fifty Shades Freed',
            voteAverage: 6.1,
            releaseDate: '02/07/2018',
            overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully ' +
                'embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. ' +
                'Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
            runtime: 106,
            posterPath: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',

            genres: ['Drama', 'Romance']

        },
        {
            id: 337167,
            title: 'Fifty Shades Freed',
            voteAverage: 6.1,
            releaseDate: '02/07/2018',
            overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully ' +
                'embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. ' +
                'Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
            runtime: 106,
            posterPath: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',

            genres: ['Drama', 'Romance']

        }];

    constructor() {
    }

    ngOnInit() {
        // !localStorage.movies.length ? localStorageHelper.addInfoToStorage('movies', this.movie) : console.log(localStorage);


        console.log(localStorageHelper.getInfoFromStorage('movie'));
    }

}
