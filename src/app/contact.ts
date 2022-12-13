export class Contact {

  constructor(public uni: string="",
              public name: string="",
              public email: string="",
              public phone: string="",
              public address: string="") {}

}

export interface ContactRsp {
  data: Contact
}
