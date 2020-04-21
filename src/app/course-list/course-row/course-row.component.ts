import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../course.model";

@Component({
  selector: 'app-course-row',
  templateUrl: './course-row.component.html',
  styleUrls: ['./course-row.component.css']
})
export class CourseRowComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
