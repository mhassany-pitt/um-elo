import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerSchema } from './player.schema';
import { PlayersService } from './players.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Player', schema: PlayerSchema }])
  ],
  providers: [PlayersService],
  exports: [PlayersService]
})
export class PlayersServiceModule { }
