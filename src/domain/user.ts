import Email from './email';
import Password from './password';

export class User {
  password: Password;
  email?: Email;
  constructor(public username: string, password: string, email?: string) {
    this.password = new Password(password);
    if (email) {
      this.email = new Email(email);
    }
  }
}
