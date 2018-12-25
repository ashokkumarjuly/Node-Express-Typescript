
import Config from '../Config';
import Signature, { Options } from './../../models/interfaces/user/getUserById';


export default (config: Config): Signature =>
    async ({ id }: Options) => {
        return config.repo.getUserById({ id });
    };
