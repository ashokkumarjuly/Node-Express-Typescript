import Config from '../Config';
import Signature from './../../models/interfaces/reset-password/getUserResetPasswordTokens';

export default (config: Config): Signature =>
  async (options) => {
    return config.repo.getUserResetPasswordTokens({
      userId: options.userId
    });
  };
