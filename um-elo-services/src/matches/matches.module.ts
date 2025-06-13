import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesServiceModule } from 'src/matches-service/matches-service.module';
import { PlayersServiceModule } from 'src/players-service/players-service.module';

@Module({
  imports: [
    PlayersServiceModule,
    MatchesServiceModule,
  ],
  controllers: [MatchesController],
})
export class MatchesModule { }
