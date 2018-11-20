import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private API_PATH = 'http://react-cdp-api.herokuapp.com/movies';
    private SEARCH_LIMIT = '10';
    private SEARCH_BY = 'title';

    constructor(private http: HttpClient) {
    }

    searchMovies(movie: string): Observable<any> {
        return this.http.get<any>(`${this.API_PATH}`, {
            params: {
                search: movie,
                searchBy: this.SEARCH_BY,
                limit: this.SEARCH_LIMIT
            }
        });
    }
}
