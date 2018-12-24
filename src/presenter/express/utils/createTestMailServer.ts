const MailDev = require('maildev');
import appConfig from '../../../appConfig';

export default () => {
  return new Promise((resolve) => {
    const maildev = new MailDev({
      port : appConfig.mail.port,
      ignoreTLS : true
    });
    maildev.close();
    maildev.listen();
    maildev.on('new', (email: any) => {
      resolve(email);
      maildev.close();
    });
  });
};
