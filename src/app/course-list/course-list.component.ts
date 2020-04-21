import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseListService} from "./course-list.service";
import {Course} from "../course.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

  courses: Course[];
  filteredCourses: Course[];
  courses$: Subscription;

  constructor(private courseList: CourseListService) { }

  ngOnInit(): void {
    this.courseList.getList().subscribe(result => {
      this.courses = result;
      this.filteredCourses = result;
    });
  }

  public onSearchFilter(event) {
    console.log(event);
    this.filteredCourses = this.courses.filter(el => el.title.includes(event));
  }

  ngOnDestroy(): void {
    this.courses$.unsubscribe();
  }
}
