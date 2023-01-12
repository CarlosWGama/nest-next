import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AnimesService {

  constructor(private prisma: PrismaService) {}
  
  async findAll() {
    return this.prisma.anime.findMany();
  }

  async rank() {
    const dados = await this.prisma.votacao.groupBy({
      by: ['animeID'],
      _count: { animeID: true},
      take: 3,
      orderBy: { _count: { animeID: 'desc'}}
    })

    return await Promise.all(dados.map(async (resultado) => {
        const anime = await this.prisma.anime.findFirst({where: {id: resultado.animeID }})
        anime['votos'] = resultado._count.animeID;
        return anime;
    }))
  }
}
