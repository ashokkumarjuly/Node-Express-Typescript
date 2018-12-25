import Signature, { Options } from './../../../models/interfaces/permissions/createPermission';
import Config from './../../utils/sequelize/Config';
import hashPassword from './../../../lib/hashPassword';
import { PermissionInstance } from '../../../models/sequelize/_instances';
import { UniqueConstraintError } from 'sequelize';
import { ModelAlreadyExistsError } from './../../../lib/errors';
export default (config: Config) => {
    return async (options: Options) => {
        try {
            const permission: PermissionInstance = await config.models.Permission.create({
                name: options.name,
                label: options.label,
                description: options.description
            });
            return permission.get({ plain: true });
        } catch (err) {
            if (err instanceof UniqueConstraintError) {
                throw new ModelAlreadyExistsError('Permission');
            }
            throw err;
        }
    };
}
