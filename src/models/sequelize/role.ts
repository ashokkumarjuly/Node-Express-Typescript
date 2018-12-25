import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { RoleAttributes } from "./../interfaces/roles";
import { RoleInstance } from "./_instances";
import { SequelizeModels } from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<RoleInstance, RoleAttributes> => {
    const Role = sequelize.define<RoleInstance, RoleAttributes>("Role", {
        name: { type: dataTypes.STRING, unique: true },
        description: dataTypes.STRING,
        deleted_at: dataTypes.DATE
    }, {
            tableName: 'roles'
        });

    return Role;
}
