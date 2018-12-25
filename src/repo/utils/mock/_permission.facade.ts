import Config from './Config';

export default (config: Config) => {
    return {
        createPermission: Promise.resolve,
        getPermissionById: Promise.resolve,
        getPermissions: Promise.resolve,
        createUserPermissions: Promise.resolve,
        getUserPermissions: Promise.resolve,
        updatePermission: Promise.resolve,
        deletePermissionById: Promise.resolve,
    }
}
