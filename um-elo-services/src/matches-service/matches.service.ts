import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from './match.schema';
import { PlayersService } from 'src/players-service/players.service';
import { EloBase } from 'src/elo-rating/elo-base';
import { useId } from 'src/utils';

@Injectable()
export class MatchesService {

  constructor(
    @InjectModel(Match.name) private model: Model<Match>,
    private players: PlayersService,
  ) { }

  async record(match: Match): Promise<void> {
    await this.model.create(match);
    const player = await this.players.find(match.player_id);
    const opponent = await this.players.find(match.opponent_id);
    new EloBase(player, opponent, match.player_score).update();
    await this.players.update(player);
    await this.players.update(opponent);
  }

  async find(id: string): Promise<Match> {
    const match = await this.model.findById(id).exec();
    return useId(match.toObject());
  }
}
