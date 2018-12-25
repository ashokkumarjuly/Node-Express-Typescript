'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstname: Sequelize.STRING,
            lastname: Sequelize.STRING,
            email: {
                type: Sequelize.STRING,
                unique: true
            },
            password: Sequelize.STRING,
            uid: Sequelize.TEXT,
            role: Sequelize.STRING,
            mobile_no: Sequelize.STRING,
            profile_image: {
                type: Sequelize.STRING,
                comment: 'Store only file names. Path should be predefined.'
            },
            account_status: {
                type: Sequelize.INTEGER,
                comment: '0 => Inactive, 1 => Active, -1 => Deleted',
                defaultValue: '0'
            },
            email_verified: {
                type: Sequelize.INTEGER,
                comment: '0 => No, 1 => Yes',
                defaultValue: '0'
            },
            time_zone: Sequelize.STRING,
            last_login_date: {
                allowNull: true,
                type: Sequelize.DATE
            },

            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
