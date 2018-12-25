import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/roles/getRoleById';
import { ROLE_MODEL_VISIBLE_PROPERTIES } from './../../../constants';
import {RoleInstance} from './../../../models/sequelize/_instances';
import ModelNotFoundError from './../../../lib/errors/ModelNotFoundError';

export default (config: Config) => {
  return async ({id}: Options) => {
    const role: RoleInstance | null = await config.models.Role.findOne({
      attributes: ROLE_MODEL_VISIBLE_PROPERTIES,
      include: [ { model: config.models.Permission, as: 'permissions' } ],
      where: { id }
    });

    if(role === null) throw new ModelNotFoundError('Role');

    return role.get({ plain: true });
  };
}
