import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/roles/deleteRoleById';
import {RoleInstance} from './../../../models/sequelize/_instances';
import {ModelNotFoundError} from './../../../lib/errors';

export default (config: Config) => {
  return async ({id}: Options) => {

    const role: RoleInstance | null = await config.models.Role.findOne({
      where: { id }
    });

    if(role === null) throw new ModelNotFoundError('Role');

    await config.models.Role.destroy({
      where: { id }
    });
  };
}
