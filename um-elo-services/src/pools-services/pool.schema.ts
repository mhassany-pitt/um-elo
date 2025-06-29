import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PoolDocument = HydratedDocument<Pool>;

@Schema()
export class Pool {

  id?: string; // used by useId(...)

  @Prop({ required: true })
  name: string;
}

export const PoolSchema = SchemaFactory.createForClass(Pool);
