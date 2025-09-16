import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from './config/config.service';

@Module({
  providers: [LoggerService, ConfigService]
})
export class CoreModule {}
