import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {

  id?: string; // used by useId(...)

  @Prop({ required: true })
  pool_id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  num_of_matches: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
