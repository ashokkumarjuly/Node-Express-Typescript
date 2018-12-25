import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/user/getUserById';
import { USER_MODEL_VISIBLE_PROPERTIES } from './../../../constants';
import {UserInstance} from './../../../models/sequelize/_instances';
import ModelNotFoundError from './../../../lib/errors/ModelNotFoundError';

export default (config: Config) => {
  return async (options: Options) => {
    const user: UserInstance | null = await config.models.User.findOne({
      attributes: USER_MODEL_VISIBLE_PROPERTIES,
      include: [ { model: config.models.Role, as: 'roles' },{ model: config.models.Post, as: 'posts' }  ],
      where: { id : options.id }
    });
    if(user === null) throw new ModelNotFoundError('User');

    return user.get({ plain: true });
  };
}
