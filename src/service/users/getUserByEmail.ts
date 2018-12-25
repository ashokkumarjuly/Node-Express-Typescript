
import Config from '../Config';
import Signature from './../../models/interfaces/user/getUserByEmail';

export default (config: Config): Signature =>
  async (options) => {
    return config.repo.getUserByEmail({
      email: options.email
    });
  };
