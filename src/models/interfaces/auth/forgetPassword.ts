import AsyncHandler from '../../../lib/AsyncHandler';


interface Options {
    readonly email: string;
}

type Signature = AsyncHandler<Options, void>;

export default Signature;
