import { Injectable } from '@nestjs/common';
import { CreateVotacaoDto } from './dto/create-votacao.dto';

@Injectable()
export class VotacaoService {
  create(createVotacaoDto: CreateVotacaoDto) {
  
  }

  lastest() {
    return [
      {id:1, email: 'teste@teste.com'},
      {id:2, email: 'carlos@teste.com'}
    ];
  }
}
