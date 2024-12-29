import { Logger } from '@nestjs/common';

export class BillionConnectConfig {
  private readonly logger = new Logger(BillionConnectConfig.name);

  constructor() {
    this.logger.log('BillionConnectConfig loaded');
  }
}
