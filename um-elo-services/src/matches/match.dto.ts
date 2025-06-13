import { Transform, Type } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, Length, Max, MaxLength, Min, MinLength } from "class-validator";
import { Player } from "src/players-service/player.schema";
import { Pool } from "src/pools-services/pool.schema";
import { IdExists } from "src/validators/id-exists.decorator";

export class Match {

  id?: string; // not used for creation/updates

  @IsNotEmpty()
  @Length(24, 24)
  @IdExists(Pool)
  pool_id: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  datetime: Date;

  @IsNotEmpty()
  @Length(24, 24)
  @IdExists(Player)
  player_id: string;

  @IsNotEmpty()
  @Length(24, 24)
  @IdExists(Player)
  opponent_id: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  player_score: number;
}