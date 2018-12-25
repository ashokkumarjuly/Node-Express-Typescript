import {Instance} from "sequelize";
import {UserRoleAttributes} from './../../interfaces/roles'

export interface UserRoleInstance extends Instance<UserRoleAttributes> {
  dataValues: UserRoleAttributes;
}
