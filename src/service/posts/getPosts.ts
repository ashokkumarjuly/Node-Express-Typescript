
import Config from '../Config';
import Signature from './../../models/interface/posts/getPosts';
import {Options} from './../../models/interface/posts/getPosts';

export default (config: Config): Signature =>
  async ({limit, offset, order} : Options) => {
    return config.repo.getPosts({
      limit, offset, order
    });
  };
