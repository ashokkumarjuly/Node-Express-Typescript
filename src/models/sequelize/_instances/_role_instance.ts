import {Instance} from "sequelize";
import {PermissionInstance} from './_permission.instance';

import {RoleAttributes} from './../../interfaces/roles'
export interface RoleInstance extends Instance<RoleAttributes> {
  dataValues: RoleAttributes;
  permissions: PermissionInstance[];
}
