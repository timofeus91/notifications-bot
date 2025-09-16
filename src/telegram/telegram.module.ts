import { Module } from '@nestjs/common';
import { TelegramService } from './telegram/telegram.service';
import { SchedulerService } from './scheduler/scheduler.service';
import { TelegramController } from './telegram.controller';

@Module({
  providers: [TelegramService, SchedulerService],
  controllers: [TelegramController]
})
export class TelegramModule {}
