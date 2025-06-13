import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './player.schema';
import { Model } from 'mongoose';
import { useId } from 'src/utils';

@Injectable()
export class PlayersService {

  constructor(
    @InjectModel(Player.name) private model: Model<Player>,
  ) { }

  async create(player: Player): Promise<Player> {
    player.name = player.name || 'Unspecified';
    player.rating = player.rating || 1000;
    player.num_of_matches = player.num_of_matches || 0;
    const created = await this.model.create(player);
    return useId<Player>(created.toObject());
  }

  async find(id: string): Promise<Player> {
    const player = await this.model.findOne({ _id: id });
    return useId<Player>(player?.toObject());
  }

  async update(player: Player): Promise<void> {
    await this.model.updateOne(
      { _id: player.id },
      { $set: { rating: player.rating, num_of_matches: player.num_of_matches } },
    );
  }
}
