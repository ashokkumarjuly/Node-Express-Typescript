
import Config from '../Config';
import Signature, { Options } from './../../models/interfaces/user/getUsers';


export default (config: Config): Signature =>
    async ({ limit, offset, order }: Options) => {
        return config.repo.getUsers({
            limit, offset, order
        });
    };
