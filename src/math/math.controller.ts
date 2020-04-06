import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from "./math.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller('math')
export class MathController {
  // Create a logger instance
  private logger: Logger = new Logger('MathController');

  // Inject the math service
  constructor(
    private mathService: MathService
  ) { }

  // Map the 'POST /add' route to this method
  @Post('add')
  // Define the logic to be executed
  async accumlate (@Body('data') data: number[]) {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(data);
  }
}
