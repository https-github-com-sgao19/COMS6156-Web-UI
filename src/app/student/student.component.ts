import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { Student } from "../student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private studentService: StudentService;
  public studentName: string;
  public studentUni: string;
  public studentsInfo: Student[];

  constructor(studentService: StudentService) {
    this.studentName = "";
    this.studentUni = "";
    this.studentService = studentService;
    this.studentsInfo = [];
  }

  ngOnInit(): void {

  }

  setStudentInfo(theStudent: Student): void {
    console.log("Students = \n" + JSON.stringify(theStudent, null, 2));
    this.studentsInfo = [theStudent];
  }

  onLookUp(): void {
    if (this.studentUni.length > 3) {
      this.studentService.getStudents(this.studentUni)
        .subscribe({
          next: data => this.studentsInfo = data,
          error: error => console.log("error!", error)
        });
    }
  }

}
