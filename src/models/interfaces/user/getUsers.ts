import AsyncHandler from '../../../lib/AsyncHandler';
import * as SequelizeStatic from 'sequelize';
import { UserAttributes} from './user.attributes';


export interface Options {
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: string;
}

type Signature = AsyncHandler<Options, any>;

export default Signature;
