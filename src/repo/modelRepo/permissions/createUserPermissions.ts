import { Options } from './../../../models/interfaces/permissions/createUserPermissions';
import Config from './../../utils/sequelize/Config';
import { PermissionInstance } from '../../../models/sequelize/_instances';
import {PermissionAttributes} from './../../../models/interfaces/permissions';
import {ModelNotFoundError} from './../../../lib/errors';
import {DEFAULT_USER_ROLE, DEFAULT_USER_PERMISSIONS} from './../../../constants';


export default (config: Config) => {
  return async ({userId, role = DEFAULT_USER_ROLE, permissions = DEFAULT_USER_PERMISSIONS}: Options) => {

    const user: any = await config.models.User.findById(userId);

    if(user === null) throw new ModelNotFoundError();

    let userRole: any = await config.models.Role.findOne({where: role});
    if(userRole === null){
      userRole = await config.models.Role.create(role);
    }

    await user.setRoles([userRole]);

    const createdPermissions: any[] = await Promise.all(
      permissions.map(async (permission: PermissionAttributes) => {
        return new Promise(async(resolve, reject) => {
          try{
            let foundPermission: PermissionInstance | null = await config.models.Permission.findOne({where: permission});
            if(foundPermission === null){
              foundPermission = await config.models.Permission.create(permission);
            }
            resolve(foundPermission);
          }catch(e){
            reject(e);
          }
        });
      })
    );

    await userRole.setPermissions(createdPermissions);
  };
}
