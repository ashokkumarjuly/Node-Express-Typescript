import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from "sequelize";
import { ResetPasswordTokenAttributes } from "./../interfaces/reset-password"
import { ResetPasswordTokenInstance } from "./_instances"
import { SequelizeModels } from './index';

export default (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<ResetPasswordTokenInstance, ResetPasswordTokenAttributes> => {
    const ResetPasswordToken = sequelize.define<ResetPasswordTokenInstance, ResetPasswordTokenAttributes>("ResetPasswordToken", {
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        token: {
            type: dataTypes.STRING,
            allowNull: false
        },
        deleted_at: dataTypes.DATE
    }, {
            tableName: 'reset_password_tokens',
        });

    return ResetPasswordToken;
}
