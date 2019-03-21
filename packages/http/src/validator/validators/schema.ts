import { IValidation } from '@stoplight/prism-core';
import { ISchema } from '@stoplight/types';

import { ISchemaValidator } from './types';
import { validateAgainstSchema } from './utils';

const SUPPORTED_MEDIATYPES = ['application/json'];

export class JSONSchemaValidator implements ISchemaValidator<ISchema> {
  public validate(content: any, schema: ISchema): IValidation[] {
    let json: any = content;
    try {
      json = JSON.parse(content);
    } catch {
      // Do nothing
    }
    return validateAgainstSchema(json, schema);
  }

  public supports(mediaType: string) {
    return SUPPORTED_MEDIATYPES.indexOf(mediaType) > -1;
  }
}