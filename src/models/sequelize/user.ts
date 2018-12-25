import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize, Instance } from "sequelize";
import { UserAttributes } from "./../interfaces/user"
import { UserInstance } from "./_instances";
import { hashPassword } from './../../lib';

export default (sequelize: Sequelize, dataTypes: DataTypes):
    SequelizeStatic.Model<UserInstance, UserAttributes> => {

    const User = sequelize.define<UserInstance, UserAttributes>("User", {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: dataTypes.STRING,
        lastname: dataTypes.STRING,
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                isUnique: function (value: string, next: any) {
                    var self = this;
                    User.find({
                        where: {
                            email: value,
                            account_status: { $gt: -1 }
                        }
                    })
                        .then(function (user: any) {
                            // reject if a different user wants to use the same email
                            if (user && self.id !== user.id) {
                                return next('Email id is already in use!');
                            }
                            return next();
                        })
                        .catch(function (err) {
                            return next(err);
                        });
                }
            }
        },
        mobile_no: {
            type: dataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: { args: [7, 20], msg: 'Phone number invalid, too short.' },
                isNumeric: { msg: 'not a valid phone number.' }
            }
        },
        role: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                isExist: function (value: string, next: any) {
                    sequelize.models.Role.find({ where: { name: value } })
                        .then(function (role) {
                            // reject if a different user wants to use the same email
                            if (role) {
                                return next();
                            } else {
                                return next('Role not exists.');
                            }
                        })
                        .catch(function (err) {
                            return next(err);
                        });
                }
            }
        },
        account_status: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: '0'
        },
        email_verified: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: '0'
        },
        uid: dataTypes.STRING,
        profile_image: dataTypes.STRING,
        time_zone: dataTypes.STRING,
        last_login_date: dataTypes.DATE,
        deleted_at: dataTypes.DATE
    }, {
            tableName: 'users'
        });

    return User;
}
