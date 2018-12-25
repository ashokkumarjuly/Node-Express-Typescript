import Config from './Config';

import createRole from '../../modelRepo/roles/createRole';
import updateRole from '../../modelRepo/roles/updateRole';
import getRoleById from '../../modelRepo/roles/getRoleById';
import deleteRoleById from '../../modelRepo/roles/deleteRoleById';
import getRoles from '../../modelRepo/roles/getRoles';
import assignRolePermission from '../../modelRepo/roles/assignRolePermission';
import revokeRolePermission from '../../modelRepo/roles/revokeRolePermission';


export default (config: Config) => {
    return {
        createRole: createRole(config),
        updateRole: updateRole(config),
        getRoles: getRoles(config),
        deleteRoleById: deleteRoleById(config),
        getRoleById: getRoleById(config),
        assignRolePermission: assignRolePermission(config),
        revokeRolePermission: revokeRolePermission(config),
    }
}
