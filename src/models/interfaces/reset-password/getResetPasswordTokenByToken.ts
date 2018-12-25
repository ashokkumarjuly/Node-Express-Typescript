import AsyncHandler from '../../../lib/AsyncHandler';

export interface Options {
  readonly token: string;
}

type Signature = AsyncHandler<Options, any>;

export default Signature;
