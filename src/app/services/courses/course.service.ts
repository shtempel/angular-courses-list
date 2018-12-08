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

    getAllCourses(limit): Observable<any> {
        return this.http.get<any>(`${this.API_PATH}`, {
            params: {
                _limit: limit
            }
        });
    }

    searchCourses(query: any): Observable<any> {
        return this.http.get<any>(`${this.API_PATH}`, {params: {q: query}});
    }

    deleteCourseById(id: number): Observable<{}> {
        return this.http.delete<any>(`${this.API_PATH}/${id}`);
    }

    getCourseById(id: number): Observable<{}> {
        return this.http.get<any>(`${this.API_PATH}/${id}`);
    }

    addCourse(course: any) {
        return this.http.post<any>(`${this.API_PATH}`, course);
    }

    updateCourseById(id: number, course): Observable<{}> {
        return this.http.put<any>(`${this.API_PATH}/${id}`, course);
    }

    setTopRated(course): Observable<any> {
        return this.http.put<any>(`${this.API_PATH}/${course.id}`,
            {...course});
    }
}
