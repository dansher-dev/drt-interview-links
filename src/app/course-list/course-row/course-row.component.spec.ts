import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRowComponent } from './course-row.component';

describe('CourseRowComponent', () => {
  let component: CourseRowComponent;
  let fixture: ComponentFixture<CourseRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRowComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: "Modern Web Development",
      duration: 5,
      'duration-unit': "day",
      description: "HTML5, CSS3, ES6/JS and more"
    };
    fixture.detectChanges();
  });

  it('title should be right', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col-4').textContent).toContain('Modern Web Development');
  });
});
