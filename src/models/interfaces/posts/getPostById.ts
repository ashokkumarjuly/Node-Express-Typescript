import AsyncHandler from '../../../lib/AsyncHandler';
import { PostAttributes } from './PostAttributes';

export interface Options {
    readonly id: number;
}

type Signature = AsyncHandler<Options, PostAttributes>;

export default Signature;
