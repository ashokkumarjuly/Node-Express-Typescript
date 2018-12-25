import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/permissions/deletePermissionById';
import { PermissionInstance } from './../../../models/sequelize/_instances';
import { ModelNotFoundError } from './../../../lib/errors';

export default (config: Config) => {
    return async ({ id }: Options) => {

        const role: PermissionInstance | null = await config.models.Permission.findById(id);

        if (role === null) throw new ModelNotFoundError('Permission');

        await config.models.Permission.destroy({
            where: { id }
        });
    };
}
