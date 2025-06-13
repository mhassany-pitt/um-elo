import { registerDecorator, ValidationOptions } from 'class-validator';
import { IdExistsConstraint } from '../validators/id-exists.validator';

export function IdExists(model: Function, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [model],
      validator: IdExistsConstraint,
    });
  };
}
