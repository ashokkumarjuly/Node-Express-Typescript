import Config from './Config';


export default (config: Config) => {
    return {
        createRole:Promise.resolve,
        updateRole: Promise.resolve,
        getRoles: Promise.resolve,
        deleteRoleById: Promise.resolve,
        getRoleById: Promise.resolve,
        assignRolePermission: Promise.resolve,
        revokeRolePermission: Promise.resolve,
    }
}
