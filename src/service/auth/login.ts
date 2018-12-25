
import Config from '../Config';
import Signature from './../../models/interfaces/auth/login';
import generateToken from './../../lib/jwt/generateToken';
import verifyPassword from './../../lib/verifyPassword';
import {InvalidCredentialsError,ModelNotFoundError} from '../../lib/errors';

export default (config: Config): Signature =>
  async ({email, password}) => {
    try{
      const user: any = await config.repo.getUserByEmail({email});

      const match: boolean = await verifyPassword(password, user.password);

      if(! match) throw new InvalidCredentialsError();

      const data: any = {
        _id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname
      };
      const token: string = await generateToken({data});

      return {user, token};
    }catch(err){
      if(err instanceof ModelNotFoundError){
        throw new InvalidCredentialsError();
      }
      throw err;
    }
  };
