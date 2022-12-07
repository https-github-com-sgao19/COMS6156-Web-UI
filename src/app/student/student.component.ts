import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { Student } from "../student";
import { HttpParams } from "@angular/common/http";

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

  public curPage: number;

  constructor(studentService: StudentService) {
    this.studentName = "";
    this.studentUni = "";
    this.studentService = studentService;
    this.studentsInfo = [];
    this.curPage = 1;
    this.studentService.getStudents()
      .subscribe({
        next: data => this.studentsInfo = data,
        error: error => console.log("Error!", error)
      });
  }

  ngOnInit(): void {
  }

  setStudentInfo(theStudent: Student): void {
    console.log("Students = \n" + JSON.stringify(theStudent, null, 2));
    this.studentsInfo = [theStudent];
  }

  onLookUp(): void {
    if (this.studentUni.length > 3) {
      this.studentService.getStudentByUni(this.studentUni)
        .subscribe({
          next: data => this.setStudentInfo(data),
          error: error => console.log("error!", error)
        });
    }
  }

  isFirstPage(): boolean {
    return this.curPage === 1;
  }

  isLastPage(): boolean {
    return this.studentsInfo.length < 10;
  }

  onPrev(): void {
    let params = new HttpParams().set("page", this.curPage - 1);
    this.studentService.getStudents(params)
      .subscribe({
        next: data => this.studentsInfo = data,
        error: error => console.log("Error!", error)
      });
    this.curPage -= 1;
  }

  onNext(): void {
    let params = new HttpParams().set("page", this.curPage + 1);
    this.studentService.getStudents(params)
      .subscribe({
        next: data => this.studentsInfo = data,
        error: error => console.log("Error!", error)
      });
    this.curPage += 1;
  }

}
