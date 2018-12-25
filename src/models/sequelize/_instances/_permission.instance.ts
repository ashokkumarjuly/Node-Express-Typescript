import {Instance} from "sequelize";
import {PermissionAttributes} from './../../interfaces/permissions'
export interface PermissionInstance extends Instance<PermissionAttributes> {
    dataValues: PermissionAttributes;
  }
