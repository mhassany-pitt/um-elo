import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersServiceModule } from 'src/players-service/players-service.module';

@Module({
  imports: [PlayersServiceModule],
  controllers: [PlayersController],
})
export class PlayersModule { }
