import appConfig from './../../../appConfig';
import Signature, {Options} from './Signature';
import Config from '../../utils/nodemailer/Config';
import * as nodemailer from 'nodemailer';

export default (config: Config) => {
  return async (data: Options) => {
    const transporter = nodemailer.createTransport({
      port: appConfig.mail.port,
      ignoreTLS: true
    });
    return transporter.sendMail(data);
  }
}
