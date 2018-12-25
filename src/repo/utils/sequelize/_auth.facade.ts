import Config from './Config';

import createResetPasswordToken from '../../modelRepo/resetPasswordTokens/createResetPasswordToken';
import getUserResetPasswordTokens from '../../modelRepo/resetPasswordTokens/getUserResetPasswordTokens';
import getResetPasswordTokenByToken from '../../modelRepo/resetPasswordTokens/getResetPasswordTokenByToken';
import deleteResetPasswordTokenById from '../../modelRepo/resetPasswordTokens/deleteResetPasswordTokenById';

export default (config: Config) => {
    return {
        getResetPasswordTokenByToken: getResetPasswordTokenByToken(config),
        deleteResetPasswordTokenById: deleteResetPasswordTokenById(config),
        createResetPasswordToken: createResetPasswordToken(config),
        getUserResetPasswordTokens: getUserResetPasswordTokens(config),
    }
}
