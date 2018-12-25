import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/reset-password/getResetPasswordTokenByToken';

export default (config: Config) => {
  return async ({token}: Options) => {
    return await config.models.ResetPasswordToken.findOne({where: {token}});
  };
}
