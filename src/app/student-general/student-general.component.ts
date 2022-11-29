import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {Constant} from "../constant";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-general',
  templateUrl: './student-general.component.html',
  styleUrls: ['./student-general.component.css']
})
export class StudentGeneralComponent implements OnInit {

  public student: Student;
  public uni: string | null;
  public schools = Constant.schools;
  public editMode: boolean;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private studentService: StudentService) {
    this.student = new Student("", "", "", "", "", "");
    this.uni = this.activateRoute.snapshot.paramMap.get('uni');
    this.studentService.getStudentByUni(this.uni).subscribe({
      next: (data) => (this.student = data),
      error: (error) => this.router.navigate(["../"], {relativeTo: this.activateRoute})
    });
    this.editMode = false;
  }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.editMode = true;
  }

  onSave(): void {
    this.editMode = false;
    this.studentService.putStudents(this.student, this.student.uni).subscribe({
      next: data => console.log("Success!", data),
      error: error => console.log("Error!", error)
    });
  }

  onDelete(): void {
    this.studentService.deleteStudents(this.uni).subscribe({
      next: data => console.log("Success!", data),
      error: error => console.log("Error!", error)
    });
    this.router.navigate(["../"], {relativeTo: this.activateRoute});
  }
}
