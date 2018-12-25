import Config from './Config';

export default (config: Config) => {
    return {
        getResetPasswordTokenByToken: Promise.resolve,
        deleteResetPasswordTokenById: Promise.resolve,
        createResetPasswordToken: Promise.resolve,
        getUserResetPasswordTokens: Promise.resolve,
    }
}
