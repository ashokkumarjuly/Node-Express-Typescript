import Config from './Config';

import getPostById from '../../modelRepo/posts/getPostById';
import getPosts from '../../modelRepo/posts/getPosts';

export default (config: Config) => {
    return {
        getPostById: getPostById(config),
        getPosts: getPosts(config)
    };
};
