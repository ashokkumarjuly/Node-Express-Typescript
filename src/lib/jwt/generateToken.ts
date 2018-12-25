import * as jwt from 'jsonwebtoken';
import config from './../../appConfig';
import {v4} from 'uuid';
import {AUTH_SCHEME_NAME} from '../../constants';

export interface Options {
  data: any;
}

export default function({data}: Options): Promise<string>{
  return new Promise((resolve, reject) => {
    jwt.sign({ data, jti: v4() }, config.jwt.secret, { algorithm: config.jwt.algoritm, expiresIn:  config.jwt.expiresIn }, (err, token) => {
      if(err) reject(err);
      resolve(`${AUTH_SCHEME_NAME} ${token}`);
    });
  });
}

