import Config from './Config';
import { ModelRepoInterface } from '../../Repo';
import migrate from '../../modelRepo/commons/migrate/sequelize';
import rollback from '../../modelRepo/commons/rollback/sequelize';
import clearRepo from '../../modelRepo/commons/clearRepo/sequelize';

import getPostById from '../../modelRepo/posts/getPostById';
import getPosts from '../../modelRepo/posts/getPosts';

import AuthFacade from './_auth.facade'
import UserFacade from './_user.facade';
import PermissionFacade from './_permission.facade';
import RoleFacade from './_role.facade';
import PostFacade from './_post.facade';


export default (config: Config): ModelRepoInterface => {
    return {
        ...AuthFacade(config),
        ...UserFacade(config),
        ...RoleFacade(config),
        ...PermissionFacade(config),

        ...PostFacade(config),

        clearRepo: clearRepo(config),
        migrate: migrate(config),
        rollback: rollback(config)
    };
};
