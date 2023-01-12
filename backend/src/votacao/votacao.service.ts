import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateVotacaoDto } from './dto/create-votacao.dto';

@Injectable()
export class VotacaoService {
  
  constructor(private prisma: PrismaService) { }

  async create(createVotacaoDto: CreateVotacaoDto) {
    return await this.prisma.votacao.upsert({
      where: {email: createVotacaoDto.email},
      update: { animeID: createVotacaoDto.animeID },
      create: createVotacaoDto 
    })
  }

  async lastest() {
    return await this.prisma.votacao.findMany({ orderBy: {id: 'desc'}, take: 5, include: {anime: true}})
  }
}
