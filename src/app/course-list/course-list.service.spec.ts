import {getTestBed, TestBed} from '@angular/core/testing';

import { CourseListService } from './course-list.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('CourseListService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: CourseListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseListService]
    });
    injector = getTestBed();
    service = injector.get(CourseListService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should get courses', () => {
    const courses =  [
      {
        id: 1,
        title: "Modern Web Development",
        duration: 5,
        "duration-unit": "day",
        description: "HTML5, CSS3, ES6/JS and more"
      },
      {
        id: 2,
        title: "Git",
        duration: 3,
        "duration-unit": "day",
        description: "Git and GitHub"
      }
    ];

    service.getList().subscribe(result => {
      expect(result.length).toBe(2);
      expect(result).toEqual(courses);
    });

    const req = httpMock.expectOne('http://localhost:4243/courses');
    expect(req.request.method).toBe("GET");
    req.flush(courses);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
