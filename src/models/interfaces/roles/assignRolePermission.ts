import AsyncHandler from '../../../lib/AsyncHandler';

export interface Options {
  readonly role_id: number | string;
  readonly permission_id: number | string;
}

type Signature = AsyncHandler<Options, any>;

export default Signature;
