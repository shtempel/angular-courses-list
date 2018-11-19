import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private API_PATH = 'http://react-cdp-api.herokuapp.com/movies?search=wars&searchBy=title';

    constructor(private http: HttpClient) {
    }

    searchMovies(): Observable<any> {
        return this.http.get<any>(
            `${this.API_PATH}`, {}).pipe(
            map((res) => {
                    return res.data;
                }
            )
        );
    }
}
