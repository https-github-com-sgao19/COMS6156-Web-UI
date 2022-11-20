import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import { StudentService } from "../student.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Constant } from "../constant"

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.css']
})
export class StudentEnrollmentComponent implements OnInit {

  private studentService: StudentService;
  private router: Router;
  private readonly activateRoute: ActivatedRoute;
  public schools = Constant.schools;

  public student: Student;
  public phone: string;
  public address: string;

  constructor(studentService: StudentService, router: Router, activateRoute: ActivatedRoute) {
    this.student = new Student("", "", "", "", "", "");
    this.studentService = studentService;
    this.router = router;
    this.activateRoute = activateRoute;
    this.phone = "";
    this.address = "";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.postStudents(this.student)
      .subscribe({
        next: (data) => console.log("Success!", data),
        error: (error) => console.log("Error!", error)
      });
    this.router.navigate(["../"], {relativeTo: this.activateRoute});
  }

}
