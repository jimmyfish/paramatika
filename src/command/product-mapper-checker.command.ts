import { Command, CommandRunner } from 'nest-commander';
import { Logger } from '@nestjs/common';

@Command({ name: 'product-mapper-checker', options: { isDefault: false } })
export class ProductMapperCheckerCommand extends CommandRunner {
  private readonly logger = new Logger(ProductMapperCheckerCommand.name);

  async run(inputs: string[], options: Record<string, any>) {
    this.logger.debug('ProductMapperCheckerCommand loaded');
  }
}
