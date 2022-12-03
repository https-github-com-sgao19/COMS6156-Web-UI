export class Course {

        constructor(public call_number: string,
                    public class_title: string,
                    public instructor: string,
                    public day: string,
                    public time_Location: string) {}
      
      }
      
      export interface CourseRsp {
        data: Course
      }
      