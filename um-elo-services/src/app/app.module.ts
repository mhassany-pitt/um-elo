import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchesModule } from 'src/matches/matches.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PlayersModule } from 'src/players/players.module';
import { IdExistsConstraint } from 'src/validators/id-exists.validator';
import { PoolsModule } from 'src/pools/pools.module';

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
    PoolsModule,
    PlayersModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [IdExistsConstraint],
})
export class AppModule { }
