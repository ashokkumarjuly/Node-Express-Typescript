import AsyncHandler from '../../../lib/AsyncHandler';
import * as SequelizeStatic from 'sequelize';
import { PermissionAttributes} from './perminsion.attributes';

export interface Options {
    readonly userId: number;
}

type Signature = AsyncHandler<Options,any[]>;

export default Signature;
