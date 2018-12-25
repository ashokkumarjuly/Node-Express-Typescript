import AsyncHandler from '../../../lib/AsyncHandler';


export interface Options {
  readonly userId: number;
  readonly token: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}

type Signature = AsyncHandler<Options,any>;
export default Signature;
