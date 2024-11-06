import validator from 'validator';

export default class Email {
  email: string;
  constructor(email: string) {
    if (validator.isEmail(email)) {
      this.email = email;
    }
    throw new Error(`Invalid Email`)
  }
}
