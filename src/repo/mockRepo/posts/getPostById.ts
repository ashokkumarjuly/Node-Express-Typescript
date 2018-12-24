import * as faker from 'faker';
import * as _ from 'lodash';
import * as moment from 'moment';
import Config from './../../utils/faker/Config';
import { PostAttributes } from '../../interface/posts/PostAttributes';
import {Options} from './../../interface/posts/getPostById';

import {
    POST_MODEL_VISIBLE_PROPERTIES,
    DEFAULT_PAGINATION_LIMIT
}
    from '../../../constants';

export default (config: Config) => {
    return async ({ id }: Options) => {
        var dateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        const post = {
            id: +id,
            user_id: Math.floor((Math.random() * 10) + DEFAULT_PAGINATION_LIMIT),
            title: faker.lorem.sentences(1),
            body: faker.lorem.sentences(10),
            created_at: moment().subtract(60, 'minutes').format("YYYY-MM-DD HH:mm:ss"),
            updated_at: dateTime
        };
        const rows: PostAttributes | null = _.pick(post, POST_MODEL_VISIBLE_PROPERTIES);
        return rows;
    };
}

