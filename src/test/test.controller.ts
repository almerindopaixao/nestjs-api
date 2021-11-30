import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get(':id') // test/:id
  acao(@Param('id') id: string): string {
    console.log(id);
    return this.testService.metodo();
  }
}

// http://localhost:
