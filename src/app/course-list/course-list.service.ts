import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Course} from "../course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor(private http: HttpClient) { }

  public getList() {
    return this.http.get<Course[]>('http://localhost:4243/courses');
  }
}
