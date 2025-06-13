import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MatchDocument = HydratedDocument<Match>;

@Schema()
export class Match {

  id?: string;

  @Prop({ required: true })
  player_id: string;

  @Prop({ required: true })
  opponent_id: string;

  @Prop({ required: true })
  player_score: number;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
