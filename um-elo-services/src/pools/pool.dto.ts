import { IsNotEmpty, MaxLength } from "class-validator";

export class Pool {

  id?: string; // not used for creation/updates

  @IsNotEmpty()
  @MaxLength(256)
  name: string;
}