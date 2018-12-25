
import { loginSignature, registerSignature, forgetPasswordSignature, resetPasswordSignature } from './../models/interfaces/auth';
import { GetUserResetPasswordTokensSignature, CreateResetPasswordTokenSignature, GetResetPasswordTokenByTokenSignature } from './../models/interfaces/reset-password';
import { GetUserByIdSignature, GetUserByEmailSignature, GetUsersSignature } from './../models/interfaces/user'
import { GetUserPermissionsSignature } from './../models/interfaces/permissions';
import { GetPostByIdSignature, GetPostsSignature } from './../models/interfaces/posts';
import CommonServiceSignature from './utils/CommonServiceSignature';



export default interface Service {

    readonly login: loginSignature;
    readonly register: registerSignature;
    readonly forgetPassword: forgetPasswordSignature;
    readonly createResetPasswordToken: CreateResetPasswordTokenSignature;
    readonly getResetPasswordTokenByToken: GetResetPasswordTokenByTokenSignature;
    readonly getUserResetPasswordTokens: GetUserResetPasswordTokensSignature;
    readonly resetPassword: resetPasswordSignature;


    readonly getUserById: GetUserByIdSignature;
    readonly getUserByEmail: GetUserByEmailSignature;
    readonly getUsers: GetUsersSignature;

    readonly getUserPermissions: GetUserPermissionsSignature;

    readonly getPostById: GetPostByIdSignature;
    readonly getPosts: GetPostsSignature;

    readonly clearService: CommonServiceSignature;
    readonly migrate: CommonServiceSignature;
    readonly rollback: CommonServiceSignature;
}
