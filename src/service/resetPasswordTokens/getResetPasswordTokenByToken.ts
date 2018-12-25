import Config from '../Config';
import Signature, { Options } from './../../models/interfaces/reset-password/getResetPasswordTokenByToken';

export default (config: Config): Signature =>
    async (options: Options) => {
        return config.repo.getResetPasswordTokenByToken({
            token: options.token
        });
    };
