import Config from './Config';
import Service from './Service';
import { getPostById, getPosts } from './posts';
import { migrate, rollback, clearService } from './utils';

export default (config: Config): Service => {
    return {

        getPostById: getPostById(config),
        getPosts: getPosts(config),


        clearService: clearService(config),
        migrate: migrate(config),
        rollback: rollback(config),
    };
};
