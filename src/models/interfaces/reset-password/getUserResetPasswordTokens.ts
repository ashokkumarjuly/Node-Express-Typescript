import AsyncHandler from '../../../lib/AsyncHandler';

export interface Options {
    readonly userId: number;
}

type Signature = AsyncHandler<Options, any[]>;

export default Signature;
