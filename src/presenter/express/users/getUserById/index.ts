import Config from '../../Config';
import catchErrors from '../../utils/catchErrors';
import { OK } from 'http-status-codes';
import getAuthUserAndPermissions from '../../../../lib/jwt/getAuthUserAndPermissions';
import hasPermission from '../../../../lib/jwt/hasPermission';
import { CAN_GET_USER } from '../../../../constants';

export default (config: Config) => {
  return catchErrors(config, async (req, res) => {

    const { permissions } = await getAuthUserAndPermissions({req, service: config.service});

    hasPermission({ permissions, permissionName: CAN_GET_USER});

    const {user_id} = req.params;

    const fetchedUser = await config.service.getUserById({id: user_id});

    res.status(OK).json(fetchedUser);
  });
}

