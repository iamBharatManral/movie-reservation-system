import { isStrongPassword } from 'validator'
import createHash from 'create-hash';

export default class Password {
  password: string;
  constructor(password: string) {
    if (isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1

    })) {
      this.password = this.generateHash(password);
    } else {
      throw new Error(`Not enough strong password`)
    }
  }
  private generateHash(password: string) {
    const hash = createHash('sha256');
    hash.update(password);
    return hash.digest().toString();
  }
}
