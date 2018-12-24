
import Config from '../Config';
import Signature from './../../repo/interface/posts/getPostById';
import {Options} from './../../repo/interface/posts/getPostById';

export default (config: Config): Signature =>
  async ({id}: Options) => {
    return config.repo.getPostById({ id });
  };
