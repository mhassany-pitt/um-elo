import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MatchDocument = HydratedDocument<Match>;

@Schema()
export class Match {

  id?: string; // used by useId(...)

  @Prop({ required: true })
  pool_id: string;

  @Prop({ required: true })
  datetime: Date;

  @Prop({ required: true })
  player_id: string;

  @Prop({ required: true })
  opponent_id: string;

  @Prop({ required: true })
  player_score: number;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
