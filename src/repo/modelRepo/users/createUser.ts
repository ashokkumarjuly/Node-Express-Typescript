import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/user/createUser';
import hashPassword from './../../../lib/hashPassword';
import {UserInstance} from './../../../models/sequelize/_instances';
import {UniqueConstraintError} from 'sequelize';
import {UserAlreadyExistsError} from './../../../lib/errors';
export default (config: Config) => {
  return async (options: Options) => {
    try{
      const user: UserInstance = await config.models.User.create({
        firstname: options.firstname,
        lastname: options.lastname,
        email: options.email,
        password: await hashPassword(options.password)
      });
      return user.get({ plain: true });
    }catch(err){
      if(err instanceof UniqueConstraintError){
        throw new UserAlreadyExistsError();
      }
      throw err;
    }
  };
}
