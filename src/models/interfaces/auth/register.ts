import AsyncHandler from '../../../lib/AsyncHandler';

export interface Options {
    readonly firstname?: string;
    readonly lastname?: string;
    readonly bio?: string;
    readonly email: string;
    readonly password: string;
}

export interface Response {
  user: any;
  token: string;
}

type Signature = AsyncHandler<Options,Response>;

export default Signature;
