import { Component, OnInit } from '@angular/core';
import { CourseService } from "../course.service";
import { Course } from "../course";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private courseService: CourseService;
  public courseName: string;
  public coursecall_number: string;
  public coursesInfo: Course[];

  public curPage: number;

  constructor(courseService: CourseService) {
    this.courseName = "";
    this.coursecall_number = "";
    this.courseService = courseService;
    this.coursesInfo = [];
    this.curPage = 1;
    this.courseService.getCourses()
      .subscribe({
        next: data => this.coursesInfo = data,
        error: error => console.log("Error!", error)
      });
  }

  ngOnInit(): void {

  }

  setCourseInfo(theCourse: Course): void {
    console.log("Courses = \n" + JSON.stringify(theCourse, null, 2));
    this.coursesInfo = [theCourse];
  }

  onLookUp(): void {
    if (this.coursecall_number.length > 3) {
      this.courseService.getCourseBycall_number(this.coursecall_number)
        .subscribe({
          next: data => this.setCourseInfo(data),
          error: error => console.log("error!", error)
        });
    }
  }

  isFirstPage(): boolean {
    return this.curPage === 1;
  }

  isLastPage(): boolean {
    return this.coursesInfo.length < 10;
  }

  onPrev(): void {
    if (this.isFirstPage())
      return;
    let params = new HttpParams().set("page", this.curPage - 1);
    this.courseService.getCourses(params)
      .subscribe({
        next: data => this.coursesInfo = data,
        error: error => console.log("Error!", error)
      });
    this.curPage -= 1;
  }

  onNext(): void {
    if (this.isLastPage())
      return;
    let params = new HttpParams().set("page", this.curPage + 1);
    this.courseService.getCourses(params)
      .subscribe({
        next: data => this.coursesInfo = data,
        error: error => console.log("Error!", error)
      });
    this.curPage += 1;
  }

}
