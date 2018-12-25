import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/roles/createRole';
import {RoleInstance} from './../../../models/sequelize/_instances';
import {UniqueConstraintError} from 'sequelize';
import {ModelAlreadyExistsError} from './../../../lib/errors';
export default (config: Config) => {
  return async (options: Options) => {
    try{
      const role: RoleInstance = await config.models.Role.create({
        name: options.name,
        description: options.description
      });
      return role.get({ plain: true });
    }catch(err){
      if(err instanceof UniqueConstraintError){
        throw new ModelAlreadyExistsError('Role');
      }
      throw err;
    }
  };
}
