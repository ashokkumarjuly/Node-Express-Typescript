import Config from './Config';


import getUserById from '../../mockRepo/users/getUserById';
import getUserByEmail from '../../mockRepo/users/getUserByEmail';
import getUsers from '../../mockRepo/users/getUsers';




export default (config: Config) => {
    return {
        createUser: Promise.resolve,
        getUserById: getUserById(config),
        deleteUserById: Promise.resolve,
        getUsers: getUsers(),
        updateUser: Promise.resolve,
        getUserByEmail: Promise.resolve,
        assignUserRole: Promise.resolve,
        revokeUserRole: Promise.resolve
    }
}
