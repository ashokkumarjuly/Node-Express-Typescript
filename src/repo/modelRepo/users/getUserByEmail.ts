import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/user/getUserByEmail';
import {UserInstance} from './../../../models/sequelize/_instances';
import ModelNotFoundError from './../../../lib/errors/ModelNotFoundError';
import { USER_MODEL_VISIBLE_PROPERTIES } from './../../../constants';

export default (config: Config) => {
  return async ({email}: Options) => {
    const user: UserInstance | null = await config.models.User.findOne({
      attributes: USER_MODEL_VISIBLE_PROPERTIES,
      where: { email }
    });

    if(user === null) throw new ModelNotFoundError();

    return user.get({ plain: true });
  };
}
