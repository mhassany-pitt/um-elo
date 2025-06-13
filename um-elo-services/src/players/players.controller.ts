import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() player: Player): Promise<Player> {
    await this.service.update(id, player);
    return this.service.find(id);
  }
}
