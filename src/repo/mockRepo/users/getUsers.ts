import * as faker from 'faker';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Options } from './../../../models/interfaces/user/getUsers';
import paginate from '../../../presenter/utils/paginate';

import {
    API_ROUTE_V1, USER_MODEL_VISIBLE_PROPERTIES,
    DEFAULT_PAGINATION_LIMIT,
    DEFAULT_PAGINATION_OFFSET
}
    from '../../../constants';


export default () => {
    return async (options: Options) => {

        const limit: number = options.limit ? options.limit : DEFAULT_PAGINATION_LIMIT;
        const offset: number = options.offset ? options.offset : DEFAULT_PAGINATION_OFFSET;
        const count = 5 * DEFAULT_PAGINATION_LIMIT;

        const rows: any[] = [];
        let start = offset * limit
        // let end = start + limit
        var dateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        _.times(limit, () => {
            const user = {
                id: start + 1,
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
                created_at: (start > 1) ? dateTime : moment().subtract((start + 1 * 60), 'minutes').format("YYYY-MM-DD HH:mm:ss"),
                updated_at: dateTime
            };
            rows.push(_.pick(user, USER_MODEL_VISIBLE_PROPERTIES));

        });

        return paginate({
            total: count,
            paginatedData: rows,
            baseUrl: `${API_ROUTE_V1}/users`,
            offset,
            limit
        });
    };
}
