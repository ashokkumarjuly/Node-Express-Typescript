import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/reset-password/deleteResetPasswordTokenById';

export default (config: Config) => {
  return async ({id}: Options) => {
    return config.models.ResetPasswordToken.destroy({where: { id }});
  };
}
