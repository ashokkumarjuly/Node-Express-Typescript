import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/posts/getPosts';
import paginate from './../../../presenter/utils/paginate';
import createOrderObject from '../../../lib/createOrderObject';
import { API_ROUTE_V1, POST_MODEL_VISIBLE_PROPERTIES, DEFAULT_PAGINATION_LIMIT, DEFAULT_PAGINATION_OFFSET, DEFAULT_SORT_ORDER } from './../../../constants';

export default (config: Config) => {
    return async (options: Options) => {

        const limit: number = options.limit ? options.limit : DEFAULT_PAGINATION_LIMIT;
        const offset: number = options.offset ? options.offset : DEFAULT_PAGINATION_OFFSET;
        const order: string[][] = options.order ? createOrderObject(options.order) : DEFAULT_SORT_ORDER;

        const { count, rows } = await config.models.Post.findAndCountAll({
            attributes: POST_MODEL_VISIBLE_PROPERTIES,
            limit,
            offset,
            order
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
