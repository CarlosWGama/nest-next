import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesController } from './animes.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AnimesController],
  providers: [AnimesService, PrismaService]
})
export class AnimesModule {}
