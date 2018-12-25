import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/reset-password/getUserResetPasswordTokens';

export default (config: Config) => {
  return async ({userId}: Options) => {
    return config.models.ResetPasswordToken.findAll({where: {user_id: userId}});
  };
}
