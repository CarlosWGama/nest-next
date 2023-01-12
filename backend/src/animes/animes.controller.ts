import { Controller, Get } from '@nestjs/common';
import { AnimesService } from './animes.service';


@Controller('animes')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) {}

  @Get()
  findAll() {
    return this.animesService.findAll();
  }

  @Get('rank')
  rank() {
    return this.animesService.rank();
  }
}
