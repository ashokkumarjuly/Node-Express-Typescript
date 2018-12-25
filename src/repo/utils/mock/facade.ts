import Config from './Config';
import { ModelRepoInterface } from '../../Repo';


import getPostById from '../../mockRepo/posts/getPostById';
import getPosts from '../../mockRepo/posts/getPosts';


export default (config: Config): ModelRepoInterface => {
    return {
        getPostById: getPostById(config),
        getPosts: getPosts(),
        clearRepo:Promise.resolve,
        migrate: Promise.resolve,
        rollback: Promise.resolve
    };
};
