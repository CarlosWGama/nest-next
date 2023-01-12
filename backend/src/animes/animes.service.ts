import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimesService {
  
  findAll() {
    return [
      {id: 1, titulo: 'Bleach', url: 'http://blablabla'},
      {id: 1, titulo: 'Spy X Family', url: 'http://blablabla'},
      {id: 1, titulo: 'Chainsaw Man', url: 'http://blablabla'},
    ]
  }

  rank() {
    return [
      {id: 1, titulo: 'Bleach', url: 'http://blablabla'},
      {id: 1, titulo: 'Spy X Family', url: 'http://blablabla'},
      {id: 1, titulo: 'Chainsaw Man', url: 'http://blablabla'},
    ]
  }
}
