import Config from './Config';
import {ModelRepoInterface} from '../../Repo';
import migrate from '../../modelRepo/commons/migrate/sequelize';
import rollback from '../../modelRepo/commons/rollback/sequelize';
import clearRepo from '../../modelRepo/commons/clearRepo/sequelize';

import getPostById from '../../modelRepo/posts/getPostById';
import getPosts from '../../modelRepo/posts/getPosts';



export default (config: Config): ModelRepoInterface => {
  return {

    getPostById: getPostById(config),
    getPosts: getPosts(config),


    clearRepo: clearRepo(config),
    migrate: migrate(config),
    rollback: rollback(config)
  };
};
