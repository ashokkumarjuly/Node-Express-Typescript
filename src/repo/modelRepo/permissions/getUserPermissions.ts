import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/permissions/getUserPermissions';
import { RoleInstance, UserInstance } from './../../../models/sequelize/_instances';
import { ModelNotFoundError } from './../../../lib/errors';
import * as R from 'ramda';

export default (config: Config) => {
    return async (options: Options) => {

        const user: UserInstance | null = await config.models.User.findOne({
            where: { id: options.userId }, include: [
                {
                    model: config.models.Role, as: 'roles', include: [
                        { model: config.models.Permission, as: 'permissions' }
                    ]
                }
            ],
        });

        if (user === null) throw new ModelNotFoundError();

        return R.flatten(
            user.roles.map((role: RoleInstance) => role.permissions)
        );
    };
}
