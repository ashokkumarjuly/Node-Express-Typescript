import AsyncHandler from '../../../lib/AsyncHandler';
import { RoleAttributes} from './../../interfaces/roles';
export interface Options {
    readonly name: string;
    readonly description?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;
    readonly deletedAt?: string;
}

type Signature = AsyncHandler<Options, RoleAttributes>;

export default Signature;
