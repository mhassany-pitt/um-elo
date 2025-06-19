import { Body, Controller, Get, Post } from '@nestjs/common';
import { Match } from './match.dto';
import { MatchesService } from 'src/matches-service/matches.service';
import { PlayersService } from 'src/players-service/players.service';

@Controller('matches')
export class MatchesController {

  constructor(
    private players: PlayersService,
    private matches: MatchesService,
  ) { }

  @Post()
  async record(@Body() match: Match) {
    const expected_scores = await this.matches.record(match);
    const player = await this.players.find(match.player_id);
    const opponent = await this.players.find(match.opponent_id);
    return { expected_scores, player, opponent };
  }

  @Get(':id')
  async player(@Body('id') id: string) {
    return await this.matches.find(id);
  }
}
