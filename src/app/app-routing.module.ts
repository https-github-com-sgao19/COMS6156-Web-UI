import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { StudentEnrollmentComponent } from "./student-enrollment/student-enrollment.component";

const routes: Routes = [
  { path: "students", component: StudentComponent },
  { path: "students/enrollment", component: StudentEnrollmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentComponent, StudentEnrollmentComponent]
