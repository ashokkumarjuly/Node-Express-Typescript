import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { PermissionAttributes } from './../interfaces/permissions';

import { PermissionInstance } from "./_instances";
import { SequelizeModels } from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<PermissionInstance, PermissionAttributes> => {
    const Permission = sequelize.define<PermissionInstance, PermissionAttributes>("Permission", {
        name: { type: dataTypes.STRING, unique: true },
        label: dataTypes.STRING,
        description: dataTypes.STRING,
        deleted_at: dataTypes.DATE
    }, {
            tableName: 'permissions'
        });

    return Permission;
}
