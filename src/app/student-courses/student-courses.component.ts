import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../course";
import {CourseService} from "../course.service";

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  public courses: Course[];
  public uni: string | null;
  public editMode: boolean;

  constructor( private activateRoute: ActivatedRoute,private router: Router, private courseService: CourseService) {
    this.courses = [];
    this.uni = this.activateRoute.snapshot.paramMap.get('uni');
    this.courseService.getEnrollmentByUni("77777")
      .subscribe({
      next: data => this.courses = data,
      error: error => console.log("Error", error)
    });
    this.editMode = false;
  }

  ngOnInit(): void {
  }

}
