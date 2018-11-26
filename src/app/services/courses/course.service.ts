import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    private API_PATH = 'http://localhost:3004/courses';

    constructor(private http: HttpClient) {
    }

    getAllCourses(): Observable<any> {
        return this.http.get<any>(`${this.API_PATH}`);
    }

    deleteCourseById(id: number): Observable<{}> {
        return this.http.delete<any>(`${this.API_PATH}/${id}`);
    }
}
