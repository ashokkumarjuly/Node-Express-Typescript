
import Config from '../Config';
import Signature from './../../models/interface/posts/getPostById';
import {Options} from './../../models/interface/posts/getPostById';

export default (config: Config): Signature =>
  async ({id}: Options) => {
    return config.repo.getPostById({ id });
  };
