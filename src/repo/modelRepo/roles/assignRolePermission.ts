import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/roles/assignRolePermission';
import {PermissionInstance} from './../../../models/sequelize/_instances';
import {ModelNotFoundError} from './../../../lib/errors';
export default (config: Config) => {
  return async ({role_id, permission_id}: Options) => {

    const role: any = await config.models.Role.findOne({
      where: {id : role_id},
      include: [
        { model: config.models.Permission, as: 'permissions'}
      ]
    });

    if(role === null) throw new ModelNotFoundError('Role');

    const permission: PermissionInstance | null = await config.models.Permission.findById(permission_id);

    if(permission === null) throw new ModelNotFoundError('Permission');

    const remainingPermissionsIds = role.permissions.map(
      (permission: any) => permission.id
    ).filter(
      (permissionId: any) => permissionId != permission_id
    );

    const permissionsToBeAssigned = [...remainingPermissionsIds, permission_id];
    await role.setPermissions(permissionsToBeAssigned);
  };
}
