import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { UserRoleAttributes } from "./../interfaces/roles"
import { UserRoleInstance } from "./_instances";
import { SequelizeModels } from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<UserRoleInstance, UserRoleAttributes> => {
    const UserRole = sequelize.define<UserRoleInstance, UserRoleAttributes>("UserRole", {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: dataTypes.INTEGER,
        role_id: dataTypes.INTEGER,
        deleted_at: dataTypes.STRING
    }, {
            tableName: 'user_role'
        });

    return UserRole;
}

