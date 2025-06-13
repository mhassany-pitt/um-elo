import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pool } from './pool.schema';
import { Model } from 'mongoose';
import { useId } from 'src/utils';

@Injectable()
export class PoolsService {

  constructor(
    @InjectModel(Pool.name) private model: Model<Pool>,
  ) { }

  async create(pool: Pool): Promise<Pool> {
    return useId<Pool>((await this.model.create(pool)).toObject());
  }

  async find(id: string): Promise<Pool> {
    return useId<Pool>((await this.model.findOne({ _id: id }))?.toObject());
  }

  async update(id: string, pool: Pool): Promise<void> {
    await this.model.updateOne({ _id: id }, { $set: { name: pool.name } });
  }
}

