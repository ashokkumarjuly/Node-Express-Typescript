import Config from './Config';
import { ModelRepoInterface } from '../../Repo';


import getPostById from '../../mockRepo/posts/getPostById';
import getPosts from '../../mockRepo/posts/getPosts';

import migrate from '../../modelRepo/commons/migrate/sequelize';
import rollback from '../../modelRepo/commons/rollback/sequelize';
import clearRepo from '../../modelRepo/commons/clearRepo/sequelize';


export default (config: Config): ModelRepoInterface => {
    return {
        getPostById: getPostById(config),
        getPosts: getPosts(),
        clearRepo:Promise.resolve,
        migrate: Promise.resolve,
        rollback: Promise.resolve
    };
};
