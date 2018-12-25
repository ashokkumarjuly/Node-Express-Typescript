
import Config from '../Config';
import Signature from './../../models/interfaces/auth/resetPassword';
import {InvalidResetPasswordTokenError, ExpiredResetPasswordTokenError} from '../../lib/errors';
import globalConfig from './../../appConfig';
import { ONE_HOUR, MAIL_PASSWORD_CHANGED_SUBJECT } from './../../constants';
import * as moment from 'moment';

export default (config: Config): Signature =>
  async ({token, password}) => {

    const resetPasswordToken: any = await config.repo.getResetPasswordTokenByToken({token});
    if(resetPasswordToken === null){
      throw new InvalidResetPasswordTokenError();
    }

    const tokenCreatedAt = moment(resetPasswordToken.created_at);
    const now = moment(new Date());

    if(moment.duration(now.diff(tokenCreatedAt)).asMilliseconds() > ONE_HOUR){
      throw new ExpiredResetPasswordTokenError();
    }

    const user: any = await config.repo.getUserById({id: resetPasswordToken.user_id});
    if(user === null){
      throw new InvalidResetPasswordTokenError();
    }

    await config.repo.updateUser({
      id: user.id,
      data: { password }
    });

    await config.repo.deleteResetPasswordTokenById({id: resetPasswordToken.id});

    await config.repo.sendEmail({
      from: globalConfig.mail.from,
      to: user.email,
      subject: MAIL_PASSWORD_CHANGED_SUBJECT,
      text: `Hello,
      Password to your account has been changed.
      If you have not requested that change contact immediately our support team.

      Thanks,
      Support Team`
    });
  };
