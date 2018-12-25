import Config from './../../utils/sequelize/Config';
import {Options} from './../../../models/interfaces/permissions/getPermissionById';
import { PERMISSION_MODEL_VISIBLE_PROPERTIES } from '../../../constants';
import {PermissionInstance} from '../../../models/sequelize/_instances';
import {ModelNotFoundError} from '../../../lib/errors';

export default (config: Config) => {
  return async ({id}: Options) => {

    const permission: PermissionInstance | null = await config.models.Permission.findOne({
      attributes: PERMISSION_MODEL_VISIBLE_PROPERTIES,
      where: { id }
    });

    if(permission === null) throw new ModelNotFoundError('Permission');

    return permission.get({ plain: true });
  };
}
