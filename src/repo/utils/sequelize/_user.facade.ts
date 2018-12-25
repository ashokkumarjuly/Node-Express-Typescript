import Config from './Config';

import createUser from '../../modelRepo/users/createUser';
import updateUser from '../../modelRepo/users/updateUser';
import deleteUserById from '../../modelRepo/users/deleteUserById';
import getUserById from '../../modelRepo/users/getUserById';
import getUserByEmail from '../../modelRepo/users/getUserByEmail';
import getUsers from '../../modelRepo/users/getUsers';
import assignUserRole from '../../modelRepo/users/assignUserRole';
import revokeUserRole from '../../modelRepo/users/revokeUserRole';



export default (config: Config) => {
    return {
        createUser: createUser(config),
        getUserById: getUserById(config),
        deleteUserById: deleteUserById(config),
        getUsers: getUsers(config),
        updateUser: updateUser(config),
        getUserByEmail: getUserByEmail(config),
        assignUserRole: assignUserRole(config),
        revokeUserRole: revokeUserRole(config)
    }
}
