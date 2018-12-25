'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'users',
            [
                {
                    firstname: 'admin',
                    lastname: 'Admin',
                    email: 'admin@mail.com',
                    password: 'password',
                    uid: '001',
                    role: 1,
                    mobile_no: '999999999',
                    profile_image: null,
                    account_status: 1,
                    email_verified: 1,
                    time_zone: null,
                    last_login_date: null,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    firstname: 'parker',
                    lastname: 'Editor',
                    email: 'editor@mail.com',
                    password: 'password',
                    uid: '002',
                    role: 0,
                    mobile_no: '888888888',
                    profile_image: null,
                    account_status: 1,
                    email_verified: 1,
                    time_zone: null,
                    last_login_date: null,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            { individualHooks: true }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
