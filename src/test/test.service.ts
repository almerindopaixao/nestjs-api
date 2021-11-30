import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  metodo(): string {
    return 'deu certo!';
  }
}
