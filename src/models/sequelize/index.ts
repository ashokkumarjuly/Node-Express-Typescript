import * as fs from 'fs';
import * as path from 'path';
import * as SequelizeStatic from 'sequelize';
import { PostAttributes } from './../../models/interfaces/posts'
import { UserAttributes } from './../../models/interfaces/user';
import { RoleAttributes } from './../../models/interfaces/roles';
import { UserRoleAttributes } from './../../models/interfaces/roles';
import { PermissionAttributes } from './../../models/interfaces/permissions';
import { RolePermissionAttributes } from './../../models/interfaces/permissions';
import { ResetPasswordTokenAttributes } from './../../models/interfaces/reset-password';

import { UserInstance, ResetPasswordTokenInstance, RoleInstance, RolePermissionInstance, PermissionInstance, UserRoleInstance, PostInstance } from './_instances';
import { Sequelize } from 'sequelize';

export interface SequelizeModels {
    User: SequelizeStatic.Model<UserInstance, UserAttributes>;
    Role: SequelizeStatic.Model<RoleInstance, RoleAttributes>;
    UserRole: SequelizeStatic.Model<UserRoleInstance, UserRoleAttributes>;
    Permission: SequelizeStatic.Model<PermissionInstance, PermissionAttributes>;
    RolePermission: SequelizeStatic.Model<RolePermissionInstance, RolePermissionAttributes>;
    Post: SequelizeStatic.Model<PostInstance, PostAttributes>;
    ResetPasswordToken: SequelizeStatic.Model<ResetPasswordTokenInstance, ResetPasswordTokenAttributes>;
}

import appConfig from './../../appConfig';
console.log('**************', appConfig)
export interface DbEnvConfig {
    database: string;
    username: string;
    password: string;
    host: string;
    operatorsAliases: boolean;
    storage?: string;
}

export interface DbConfig {
    [key: string]: DbEnvConfig;
}

const env: string = process.env.NODE_ENV || 'development';
const config: any = appConfig.sequelize;

const basename: string = path.basename(module.filename);

console.log('config--------------------------', config);
const _sequelize: Sequelize = new SequelizeStatic(
    config.database,
    config.username,
    config.password,
    ...config.connectionOptions
);

let _models: any = {};
const files: Array<string> = fs.readdirSync(__dirname);

files.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(0, 1) != '_')
        && (file.slice(-3) === '.js' || file.slice(-3) === '.ts')
        && (file !== 'interfaces');
}).forEach(file => {
    // console.log('filefilefilefilefilefile',__dirname, file)
    let model: any = _sequelize.import(path.join(__dirname, file));
    //console.log(model);
    _models[model.name] = model;
});



_models.Post.belongsTo(_models.User);
_models.User.hasMany(_models.Post, { as: 'posts', onDelete: 'CASCADE' });
_models.User.hasMany(_models.ResetPasswordToken, { as: 'reset_password_tokens', onDelete: 'CASCADE' });
_models.Role.belongsToMany(_models.User, { through: _models.UserRole, as: 'users', onDelete: 'CASCADE', individualHooks: true });
_models.User.belongsToMany(_models.Role, { through: _models.UserRole, as: 'roles', onDelete: 'CASCADE', individualHooks: true });
_models.Role.belongsToMany(_models.Permission, { through: { model: _models.RolePermission, unique: false }, onDelete: 'CASCADE', as: 'permissions' });
_models.Permission.belongsToMany(_models.Role, { through: { model: _models.RolePermission, unique: false }, onDelete: 'CASCADE', as: 'roles' });

export const models: SequelizeModels = _models;
export const sequelize: Sequelize = _sequelize;
