import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/user/updateUser';
import hashPassword from './../../../lib/hashPassword';
import { USER_MODEL_VISIBLE_PROPERTIES } from './../../../constants';

export default (config: Config) => {
    return async ({ id, data }: Options) => {

        const password = typeof data.password === 'string' ? { password: await hashPassword(data.password) } : {};

        const [] = await config.models.User.update(
            {
                ...data,
                ...password,
                updated_at: (
                    new Date().toDateString()
                )
            },
            {
                where: { id }
            }
        );

        return await config.models.User.findOne({
            attributes: USER_MODEL_VISIBLE_PROPERTIES,
            where: { id }
        });
    };
}
