import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return { msg: 'I have signed ' };
  }
  signup() {
    return { msg: 'I have signin ' };
  }
}
