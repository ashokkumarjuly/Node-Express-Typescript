import {Instance} from "sequelize";
import {RoleInstance} from './_role_instance';
import {PostInstance} from './_postInstance';
import {SequelizeModels} from '../index';
import {UserAttributes} from './../../interfaces/user';

export interface UserInstance extends Instance<UserAttributes> {
    dataValues: UserAttributes;
    roles: RoleInstance[];
    posts: PostInstance[];
  }
