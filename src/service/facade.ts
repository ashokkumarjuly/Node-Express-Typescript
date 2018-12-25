import Config from './Config';
import Service from './Service';
import { login, register, forgetPassword, resetPassword } from './auth';
import {getUserResetPasswordTokens,createResetPasswordToken, getResetPasswordTokenByToken} from './resetPasswordTokens';
import { getUserById, getUserByEmail, getUsers } from './users';
import {getUserPermissions} from './permissions';
import { getPostById, getPosts } from './posts';
import { migrate, rollback, clearService } from './utils';

export default (config: Config): Service => {
    return {
        login: login(config),
        register: register(config),
        forgetPassword: forgetPassword(config),
        resetPassword: resetPassword(config),

        getResetPasswordTokenByToken: getResetPasswordTokenByToken(config),
        createResetPasswordToken: createResetPasswordToken(config),
        getUserResetPasswordTokens: getUserResetPasswordTokens(config),

        getUserById: getUserById(config),
        getUserByEmail: getUserByEmail(config),
        getUsers: getUsers(config),

        getUserPermissions: getUserPermissions(config),

        getPostById: getPostById(config),
        getPosts: getPosts(config),


        clearService: clearService(config),
        migrate: migrate(config),
        rollback: rollback(config),
    };
};
