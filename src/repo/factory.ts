import facade from './facade';
import appConfig from '../appConfig';
import Repo from './Repo';

export default (): Repo => facade({
    modelRepoName: appConfig.modelRepo.name,
    mailRepoName: appConfig.mailRepo.name,
    sequelize: appConfig.sequelize
});
