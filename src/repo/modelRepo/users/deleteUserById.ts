import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/user/deleteUserById';
import {UserInstance} from './../../../models/sequelize/_instances';
import ModelNotFoundError from './../../../lib/errors/ModelNotFoundError';

export default (config: Config) => {
  return async ({id}: Options) => {

    const user: UserInstance | null = await config.models.User.findOne({
      where: { id }
    });
    if(user === null) throw new ModelNotFoundError('User');

    await config.models.User.destroy({
      where: { id }
    });
  };
}
