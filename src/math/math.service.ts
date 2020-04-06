import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  /**
   * accmulate
   */
  public async accumulate (data: number[]): Promise<number> {
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }
}
