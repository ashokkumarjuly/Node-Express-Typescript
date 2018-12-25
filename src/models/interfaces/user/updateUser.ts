import AsyncHandler from '../../../lib/AsyncHandler';
import * as SequelizeStatic from 'sequelize';
import { UserAttributes} from './user.attributes';

export interface Data {
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email?: string;
  readonly password?: string;
}

export interface Options {
  readonly id: string;
  readonly data: Data
}


type Signature = AsyncHandler<Options,any>;

export default Signature;
