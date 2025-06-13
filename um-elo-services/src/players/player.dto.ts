import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, Length, MaxLength, MinLength } from "class-validator";
import { Pool } from "src/pools-services/pool.schema";
import { IdExists } from "src/validators/id-exists.decorator";

export class Player {

  id?: string; // not used for creation/updates

  @IsNotEmpty()
  @Length(24, 24)
  @IdExists(Pool)
  pool_id: string;

  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  @IsOptional()
  @IsNumber()
  rating: number;

  @IsOptional()
  @IsNumber()
  num_of_matches: number;
}