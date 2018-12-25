import AsyncHandler from '../../../lib/AsyncHandler';

export interface Options {
    readonly role_id: string;
    readonly permission_id: string;
}

type Signature = AsyncHandler<Options, void>;

export default Signature;