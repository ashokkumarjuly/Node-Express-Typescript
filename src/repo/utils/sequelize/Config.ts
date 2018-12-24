import {Sequelize} from 'sequelize';
import {SequelizeModels} from '../../../models/sequelize';

export default interface Config {
  readonly sequelizeInstance: Sequelize;
  readonly models: SequelizeModels;
}
