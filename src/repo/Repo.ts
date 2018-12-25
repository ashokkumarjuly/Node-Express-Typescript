
import { GetPostByIdSignature, GetPostsSignature } from './../models/interfaces/posts';
import { CreateUserSignature, GetUserByIdSignature, GetUserByEmailSignature, GetUsersSignature, UpdateUserSignature, DeleteUserByIdSignature, AssignUserRoleSignature, RevokeUserRoleSignature } from './../models/interfaces/user';
import { CreateRoleSignature, GetRoleByIdSignature, GetRolesSignature, UpdateRoleSignature, DeleteRoleByIdSignature, AssignRolePermissionSignature, RevokeRolePermissionSignature } from './../models/interfaces/roles';
import {
    CreateUserPermissionsSignature, GetUserPermissionsSignature, CreatePermissionSignature, GetPermissionByIdSignature, GetPermissionsSignature,
    UpdatePermissionSignature, DeletePermissionByIdSignature
} from './../models/interfaces/permissions';
import { CreateResetPasswordTokenSignature, GetUserResetPasswordTokensSignature, GetResetPasswordTokenByTokenSignature, DeleteResetPasswordTokenByIdSignature } from './../models/interfaces/reset-password';
import SendEmailSignature from './mailRepo/sendEmail/Signature';



// import SendEmailSignature from './mailRepo/sendEmail/Signature';

export interface ModelRepoInterface {

    readonly createResetPasswordToken: CreateResetPasswordTokenSignature;
    readonly getUserResetPasswordTokens: GetUserResetPasswordTokensSignature;
    readonly getResetPasswordTokenByToken: GetResetPasswordTokenByTokenSignature;
    readonly deleteResetPasswordTokenById: DeleteResetPasswordTokenByIdSignature;

    readonly createUser: CreateUserSignature;
    readonly getUserById: GetUserByIdSignature;
    readonly getUserByEmail: GetUserByEmailSignature;
    readonly getUsers: GetUsersSignature;
    readonly updateUser: UpdateUserSignature;
    readonly deleteUserById: DeleteUserByIdSignature;
    readonly assignUserRole: AssignUserRoleSignature;
    readonly revokeUserRole: RevokeUserRoleSignature;

    readonly createRole: CreateRoleSignature;
    readonly getRoleById: GetRoleByIdSignature;
    readonly getRoles: GetRolesSignature;
    readonly updateRole: UpdateRoleSignature;
    readonly deleteRoleById: DeleteRoleByIdSignature;
    readonly assignRolePermission: AssignRolePermissionSignature;
    readonly revokeRolePermission: RevokeRolePermissionSignature;


    readonly createPermission: CreatePermissionSignature;
    readonly getPermissionById: GetPermissionByIdSignature;
    readonly getPermissions: GetPermissionsSignature;
    readonly updatePermission: UpdatePermissionSignature;
    readonly deletePermissionById: DeletePermissionByIdSignature;
    readonly createUserPermissions: CreateUserPermissionsSignature;
    readonly getUserPermissions: GetUserPermissionsSignature;


    readonly getPostById: GetPostByIdSignature;
    readonly getPosts: GetPostsSignature;

    readonly clearRepo: () => Promise<void>;
    readonly migrate: () => Promise<void>;
    readonly rollback: () => Promise<void>;
}

export interface MailRepoInterface {
    readonly sendEmail: SendEmailSignature;
}

export default interface Repo extends ModelRepoInterface, MailRepoInterface { }
