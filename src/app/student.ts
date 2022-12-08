export class Student {

  constructor(public uni: string="",
              public first_name: string="",
              public middle_name: string="",
              public last_name: string="",
              public email: string="",
              public school_code: string="") {}

}

export interface StudentRsp {
  data: Student
}
