import AsyncHandler from '../../../lib/AsyncHandler';
import * as SequelizeStatic from 'sequelize';
import { PermissionAttributes} from './perminsion.attributes';
import { RoleAttributes} from './../roles';

export interface Options {
    readonly userId: number|string;
    readonly permissions?: PermissionAttributes[];
    readonly role?: RoleAttributes;
}

type Signature = AsyncHandler<Options,void>;

export default Signature;
