import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();
import * as express from 'express';
import appConfig from './appConfig';
import logger from './logger';
import { API_ROUTE_V1 } from './constants/site';
import presenter from './presenter/express';
import serviceFactory from './service/factory';
import translatorFactory from './translator/factory';


const app: express.Application = express();
const service = serviceFactory();
const translator = translatorFactory();

const presenterFacade = presenter({
    morganLogFormat: appConfig.express.morganLogFormat,
    morganDirectory: appConfig.express.morganDirectory,
    service,
    logger,
    translator
  });

  app.use(API_ROUTE_V1, presenterFacade);

app.listen(appConfig.express.port, () => {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);

    console.log(`API Server is connected with ${appConfig.sequelize.connectionOptions.dialect} instance at
${appConfig.sequelize.connectionOptions.host}:${appConfig.sequelize.connectionOptions.port}
`);

    logger.info(`Listening on port ${appConfig.express.port}`);
    if (process.send !== undefined) {
        logger.info('Process ready');
        process.send('ready');
    }

});
