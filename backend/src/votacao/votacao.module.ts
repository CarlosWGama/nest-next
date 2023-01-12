import { Module } from '@nestjs/common';
import { VotacaoService } from './votacao.service';
import { VotacaoController } from './votacao.controller';

@Module({
  controllers: [VotacaoController],
  providers: [VotacaoService]
})
export class VotacaoModule {}
