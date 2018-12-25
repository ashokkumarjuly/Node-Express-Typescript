import {Instance} from "sequelize";
import {RolePermissionAttributes} from "./../../interfaces/permissions"
export interface RolePermissionInstance extends Instance<RolePermissionAttributes> {
    dataValues: RolePermissionAttributes;
  }
