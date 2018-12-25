import AsyncHandler from '../../../lib/AsyncHandler';
import { PermissionAttributes} from './perminsion.attributes';

export interface Options {
    readonly id: number;
}

type Signature = AsyncHandler<Options, PermissionAttributes>;

export default Signature;
