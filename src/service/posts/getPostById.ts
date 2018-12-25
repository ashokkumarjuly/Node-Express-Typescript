
import Config from '../Config';
import Signature from './../../models/interfaces/posts/getPostById';
import {Options} from './../../models/interfaces/posts/getPostById';

export default (config: Config): Signature =>
  async ({id}: Options) => {
    return config.repo.getPostById({ id });
  };
