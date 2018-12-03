import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthorsService {
    private API_PATH = 'http://localhost:3004/authors';

    constructor(private http: HttpClient) { }

    searchAuthors(partialName): Observable<any> {
        return this.http.get<any>(`${this.API_PATH}`, {
            params: {
                q: partialName
            }
        })
            .pipe(
                map((res) => res.map(
                    author => {
                        console.log(author);
                        return {
                            id: author.id,
                            firstName: author.name,
                            lastName: ''
                        };
                    }
                    )
                )
            );
    }
}
