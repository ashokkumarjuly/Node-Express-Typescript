import AsyncHandler from '../../../lib/AsyncHandler';
import {PermissionAttributes} from './perminsion.attributes';

export interface Data {
  readonly name?: string;
  readonly label?: string;
  readonly description?: string;
}

export interface Options {
  readonly id: number;
  readonly data: Data
}

type Signature = AsyncHandler<Options, PermissionAttributes>;

export default Signature;
