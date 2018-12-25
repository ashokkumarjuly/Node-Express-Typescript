import Config from './Config';

import createPermission from '../../modelRepo/permissions/createPermission';
import getPermissions from '../../modelRepo/permissions/getPermissions';
import updatePermission from '../../modelRepo/permissions/updatePermission';
import getPermissionById from '../../modelRepo/permissions/getPermissionById';
import deletePermissionById from '../../modelRepo/permissions/deletePermissionById';

import getUserPermissions from '../../modelRepo/permissions/getUserPermissions';
import createUserPermissions from '../../modelRepo/permissions/createUserPermissions';

export default (config: Config) => {
    return {
        createPermission: createPermission(config),
        getPermissionById: getPermissionById(config),
        getPermissions: getPermissions(config),
        createUserPermissions: createUserPermissions(config),
        getUserPermissions: getUserPermissions(config),
        updatePermission: updatePermission(config),
        deletePermissionById: deletePermissionById(config),
    }
}
