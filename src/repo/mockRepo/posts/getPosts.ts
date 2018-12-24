import * as faker from 'faker';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Options } from '../../interface/posts/getPosts';
import paginate from '../../../presenter/utils/paginate';
import createOrderObject from '../../../lib/createOrderObject';
import {
    API_ROUTE_V1, POST_MODEL_VISIBLE_PROPERTIES,
    DEFAULT_PAGINATION_LIMIT,
    DEFAULT_PAGINATION_OFFSET,
    DEFAULT_SORT_ORDER
}
    from '../../../constants';

export default () => {
    return async (options: Options) => {

        const limit: number = options.limit ? options.limit : DEFAULT_PAGINATION_LIMIT;
        const offset: number = options.offset ? options.offset : DEFAULT_PAGINATION_OFFSET;
        const order: string[][] = options.order ? createOrderObject(options.order) : DEFAULT_SORT_ORDER;
        const count = 5 * DEFAULT_PAGINATION_LIMIT;

        const rows: any[] = [];
        let start = offset * limit
        // let end = start + limit
        var dateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        _.times(limit, () => {
            const post = {
                id: start + 1,
                user_id: Math.floor((Math.random() * 10) + DEFAULT_PAGINATION_LIMIT),
                title: faker.lorem.sentences(1),
                body: faker.lorem.sentences(10),
                created_at: (start > 1) ? dateTime : moment().subtract((start + 1 * 60), 'minutes').format("YYYY-MM-DD HH:mm:ss"),
                updated_at: 'updated_at'
            };
            rows.push(_.pick(post, POST_MODEL_VISIBLE_PROPERTIES));

        });

        return paginate({
            total: count,
            paginatedData: rows,
            baseUrl: `${API_ROUTE_V1}/posts`,
            offset,
            limit
        });
    };
}

