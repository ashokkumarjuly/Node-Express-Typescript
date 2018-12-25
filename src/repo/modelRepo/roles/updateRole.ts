import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/roles/updateRole';
import {RoleInstance} from './../../../models/sequelize/_instances';
import {ModelNotFoundError} from './../../../lib/errors';
import { ROLE_MODEL_VISIBLE_PROPERTIES } from './../../../constants';
export default (config: Config) => {
  return async ({id, data}: Options) => {

      const foundRole: RoleInstance | null = await config.models.Role.findOne({
        attributes: ROLE_MODEL_VISIBLE_PROPERTIES,
        where: { id }
      });

      if(foundRole === null) throw new ModelNotFoundError('Role');

      await config.models.Role.update(
        {
          ...data,
          updated_at: (new Date().toDateString())
        },
        {
          where : {id}
        }
      );

      const role: any  = await config.models.Role.findOne({
        attributes: ROLE_MODEL_VISIBLE_PROPERTIES,
        where: { id }
      });

      return role.get({plain: true});
    };
}
