import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IdExists', async: true })
@Injectable()
export class IdExistsConstraint implements ValidatorConstraintInterface {

  constructor(@InjectConnection() private conn: Connection) { }

  async validate(value: string, args: ValidationArguments): Promise<boolean> {
    if (!value) {
      // ignore validation if value is empty
      return true;
    }

    const [modelClass] = args.constraints;
    try {
      const model: Model<any> = this.conn.model(modelClass.name, modelClass.schema);
      const exists = await model.findOne({ _id: value });
      return !!exists;
    } catch (exp) {
      console.error(`Error validating ID in model ${modelClass.name}:`, exp);
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const [modelClass] = args.constraints;
    return `${args.property} with value "${args.value}" does not exist in ${modelClass.name}`;
  }
}
