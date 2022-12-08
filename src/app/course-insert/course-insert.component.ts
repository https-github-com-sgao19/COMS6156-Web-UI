import { Component, OnInit } from '@angular/core';
import { Course } from "../course";
import { CourseService } from "../course.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-course-insert',
  templateUrl: './course-insert.component.html',
  styleUrls: ['./course-insert.component.css']
})
export class CourseInsertComponent implements OnInit {

  private courseService: CourseService;
  private router: Router;
  private readonly activateRoute: ActivatedRoute;

  public course: Course;

  constructor(courseService: CourseService, router: Router, activateRoute: ActivatedRoute) {
    this.course = new Course("", "", "", "", "");
    this.courseService = courseService;
    this.router = router;
    this.activateRoute = activateRoute;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.courseService.postCourses(this.course)
      .subscribe({
        next: (data) => console.log("Success!", data),
        error: (error) => console.log("Error!", error)
      });
    this.router.navigate(["../"], {relativeTo: this.activateRoute});
  }

}
