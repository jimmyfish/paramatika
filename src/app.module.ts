import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductMapperCheckerCommand } from '@command/product-mapper-checker.command';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProductMapperCheckerCommand],
})
export class AppModule {}
