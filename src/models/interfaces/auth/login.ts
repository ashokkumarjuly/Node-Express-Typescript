import AsyncHandler from '../../../lib/AsyncHandler';
import { UserAttributes} from './../user';

interface Options {
    readonly email: string;
    readonly password: string;
}
export interface Response {
    user: UserAttributes;
    token: string;
}

type Signature = AsyncHandler<Options, Response>;

export default Signature;
