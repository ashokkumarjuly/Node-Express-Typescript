import AsyncHandler from '../../../lib/AsyncHandler';

export interface Options {
    readonly token: string;
    readonly password: string;
}

type Signature = AsyncHandler<Options,void>;

export default Signature;
