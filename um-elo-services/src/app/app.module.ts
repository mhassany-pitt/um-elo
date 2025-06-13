import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchesModule } from 'src/matches/matches.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PlayersModule } from 'src/players/players.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env.production'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    PlayersModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
