import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlayersService } from 'src/players-service/players.service';
import { Player } from './player.dto';

@Controller('players')
export class PlayersController {

  constructor(
    private service: PlayersService
  ) { }

  @Post()
  async create(@Body() player: Player): Promise<Player> {
    return await this.service.create(player);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Player> {
    return await this.service.find(id);
  }
}
