import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimesModule } from './animes/animes.module';
import { VotacaoModule } from './votacao/votacao.module';

@Module({
  imports: [AnimesModule, VotacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
