import Config from './Config';
import { ModelRepoInterface } from '../../Repo';

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
        clearRepo:Promise.resolve,
        migrate: Promise.resolve,
        rollback: Promise.resolve
    };
};
