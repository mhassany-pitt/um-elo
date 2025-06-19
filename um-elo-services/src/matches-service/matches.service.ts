import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from './match.schema';
import { PlayersService } from 'src/players-service/players.service';
import { EloBase } from 'src/elo-rating/elo-base';
import { useId } from 'src/utils';
import { ExpectedScores } from 'src/matches/expected-scores.dto';

@Injectable()
export class MatchesService {

  constructor(
    @InjectModel(Match.name) private model: Model<Match>,
    private players: PlayersService,
  ) { }

  async record(match: Match): Promise<ExpectedScores> {
    await this.model.create(match);
    const player = await this.players.find(match.player_id);
    const opponent = await this.players.find(match.opponent_id);
    const expected_scores = new EloBase(player, opponent, match.player_score).update();
    await this.players.update(player.id, player);
    await this.players.update(opponent.id, opponent);
    return expected_scores;
  }

  async find(id: string): Promise<Match> {
    return useId((await this.model.findOne({ _id: id }))?.toObject());
  }
}
