import * as moment from 'moment';
import * as winston from 'winston';
import appConfig from './appConfig';
const getTime = () => moment().format('YYYY-MM-DD HH:mm:ss:SSS');

const logger = winston.createLogger({
  level: appConfig.winston.level,
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: `${appConfig.winston.winstonDirectory}/error.log`, level: appConfig.winston.level }),
    new winston.transports.File({ filename: `${appConfig.winston.winstonDirectory}/'combined.log` })
  ]
});

if (appConfig.express.env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger
