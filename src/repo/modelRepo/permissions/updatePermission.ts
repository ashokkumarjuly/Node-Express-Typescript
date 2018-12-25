import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/permissions/updatePermission';
import {PermissionInstance} from './../../../models/sequelize/_instances';
import { ModelNotFoundError } from './../../../lib/errors';
import { PERMISSION_MODEL_VISIBLE_PROPERTIES } from './../../../constants';
export default (config: Config) => {
  return async ({id, data}: Options) => {

      const foundPermission: PermissionInstance | null = await config.models.Permission.findById(id);

      if(foundPermission === null) throw new ModelNotFoundError('Permission');

      await config.models.Permission.update(
        {
          ...data,
          updated_at: (new Date().toDateString())
        },
        {
          where : {id}
        }
      );

      const role: any  = await config.models.Permission.findOne({
        attributes: PERMISSION_MODEL_VISIBLE_PROPERTIES,
        where: { id }
      });

      return role.get({plain: true});
    };
}
