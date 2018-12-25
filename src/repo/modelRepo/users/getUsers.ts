import Config from './../../utils/sequelize/Config';
import { Options } from './../../../models/interfaces/user/getUsers';
import { USER_MODEL_VISIBLE_PROPERTIES } from './../../../constants';
import paginate from './../../../presenter/express/utils/paginate';
import createOrderObject from './../../../lib/createOrderObject';
import {API_ROUTE_V1, DEFAULT_PAGINATION_LIMIT,DEFAULT_PAGINATION_OFFSET,DEFAULT_SORT_ORDER } from './../../../constants';

export default (config: Config) => {
  return async (options: Options) => {

    const limit: number = options.limit ? options.limit : DEFAULT_PAGINATION_LIMIT;
    const offset: number = options.offset ?options.offset : DEFAULT_PAGINATION_OFFSET;
    const order: string[][] = options.order ? createOrderObject(options.order) : DEFAULT_SORT_ORDER;

    const {count, rows} = await config.models.User.findAndCountAll({
      attributes: USER_MODEL_VISIBLE_PROPERTIES,
      limit,
      offset,
      order
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
