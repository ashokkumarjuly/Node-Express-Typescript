import Config from './Config';

import getPostById from '../../mockRepo/posts/getPostById';
import getPosts from '../../mockRepo/posts/getPosts';


export default (config: Config) => {
    return {
        getPostById: getPostById(config),
        getPosts: getPosts(),

    };
};
