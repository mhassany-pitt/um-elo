import { Body, Controller, Patch, Post } from '@nestjs/common';
import { Pool } from './pool.dto';
import { PoolsService } from 'src/pools-services/pools.service';

@Controller('pools')
export class PoolsController {

  constructor(
    private service: PoolsService,
  ) { }

  @Post()
  async create(@Body() pool: Pool) {
    return await this.service.create(pool);
  }

  @Post(':id')
  async find(@Body('id') id: string) {
    return await this.service.find(id);
  }

  @Patch(':id')
  async update(@Body('id') id: string, @Body() pool: Pool): Promise<Pool> {
    await this.service.update(id, pool);
    return await this.service.find(id);
  }
}
