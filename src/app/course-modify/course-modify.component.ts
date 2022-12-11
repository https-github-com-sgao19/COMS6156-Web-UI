import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {HttpClient} from "@angular/common/http";
import {CourseService} from "../course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../project.service";
import {Project} from "../project"
@Component({
  selector: 'app-course-modify',
  templateUrl: './course-modify.component.html',
  styleUrls: ['./course-modify.component.css']
})
export class CourseModifyComponent implements OnInit {

  // private courseService: CourseService;
  public call_id: string | null;
  public course: Course;
  public project: Project[];
  // private router: Router;


  constructor(private courseService: CourseService, private activateRoute: ActivatedRoute, private router: Router,
              private projectService: ProjectService) {
    this.course = new Course("", "", "", "", "");
    this.call_id = this.activateRoute.snapshot.paramMap.get("call_no");
    this.courseService.getCourseBycall_number(this.call_id).subscribe({
      next: next => this.course = next,
      error: error => console.log("Error", error)
    });
    this.projectService = projectService;
    this.project = [];
    this.projectService.getProjectBycall_number(this.call_id).subscribe({
      next: next => {
        this.project = next;
        console.log(this.project);
      },
      error: error => console.log("Error", error)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.courseService.putCourses(this.course, this.course.call_number)
      .subscribe({
        next: (data) => console.log("Success!", data),
        error: (error) => console.log("Error!", error)
      });
    this.router.navigate(["../"], {relativeTo: this.activateRoute});
  }



}
