import Config from '../Config';
import Signature from './../../models/interfaces/permissions/getUserPermissions';


export default (config: Config): Signature =>
  async (options) => {
    return config.repo.getUserPermissions({
      userId: options.userId
    });
  };
