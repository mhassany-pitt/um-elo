import { Module } from '@nestjs/common';
import { PoolsController } from './pools.controller';
import { PoolsServicesModule } from 'src/pools-services/pools-services.module';

@Module({
  imports: [PoolsServicesModule],
  controllers: [PoolsController],
})
export class PoolsModule { }
