import * as faker from 'faker';
import * as _ from 'lodash';
import * as moment from 'moment';
import Config from './../../utils/mock/Config';

import { Options } from './../../../models/interfaces/user/getUserById';
import { UserAttributes } from '../../../models/interfaces/user';
import { USER_MODEL_VISIBLE_PROPERTIES } from './../../../constants';

export default (config: Config) => {
    return async ({ id }: Options) => {
        var dateTime = moment().format("YYYY-MM-DD HH:mm:ss");

        const data = {
            id: id,
            firstname: '' + faker.name.title,
            lastname: '' + faker.name.lastName,
            email: '' + faker.internet.email,
            uid: '' + Math.floor((Math.random() * 100)),
            role: 'editor',
            mobile_no: '' + faker.phone,
            profile_image: '' + faker.image,
            account_status: 1,
            email_verified: 1,
            time_zone: '',
            last_login_date: '' + dateTime,
            created_at: moment().subtract(60, 'minutes').format("YYYY-MM-DD HH:mm:ss"),
            updated_at: dateTime
        };
        const rows: UserAttributes | null = _.pick(data, USER_MODEL_VISIBLE_PROPERTIES);
        return rows;
    };
}
