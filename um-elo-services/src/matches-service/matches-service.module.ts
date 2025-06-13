import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchSchema } from './match.schema';
import { MatchesService } from './matches.service';
import { PlayersServiceModule } from 'src/players-service/players-service.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Match', schema: MatchSchema }]),
    PlayersServiceModule,
  ],
  providers: [MatchesService],
  exports: [MatchesService]
})
export class MatchesServiceModule { }
