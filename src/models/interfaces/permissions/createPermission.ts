import AsyncHandler from '../../../lib/AsyncHandler';
import { PermissionAttributes} from './perminsion.attributes';
export interface Options {
    readonly name: string;
    readonly label?: string;
    readonly description?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;
    readonly deletedAt?: string;
}

type Signature = AsyncHandler<Options, PermissionAttributes>;

export default Signature;
