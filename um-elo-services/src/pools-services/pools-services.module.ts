import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PoolSchema } from './pool.schema';
import { PoolsService } from './pools.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pool', schema: PoolSchema }])
  ],
  providers: [PoolsService],
  exports: [PoolsService]
})
export class PoolsServicesModule { }
