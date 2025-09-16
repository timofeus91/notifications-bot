import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '../core/core.module';
import { DatabaseModule } from '../database/database.module';
import { NlpModule } from '../nlp/nlp.module';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [CoreModule, DatabaseModule, NlpModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
