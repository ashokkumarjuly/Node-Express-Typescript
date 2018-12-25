import Config from './Config';
import Repo from './Repo';
import { ModelRepoInterface, MailRepoInterface } from './Repo';

import sequelizeRepo from './utils/sequelize/facade';
import { models as sequelizeModels, sequelize } from './../models/sequelize';

import nodemailerRepo from './utils/nodemailer/facade';

import mockRepo from './utils/mock/facade'

const modelRepoFactory = (name: string): ModelRepoInterface => {
    switch (name) {
        case 'faker':
            return mockRepo({});
        default: case 'sequelize':
            return sequelizeRepo({
                sequelizeInstance: sequelize,
                models: sequelizeModels
            });
    }
}

const mailRepoFactory = (name: string): MailRepoInterface => {
    switch (name) {
        default: case 'nodemailer':
            return nodemailerRepo({});
    }
}

export default (config: Config): Repo => {
    /* istanbul ignore next */
    return {
        ...modelRepoFactory(config.modelRepoName),
        ...mailRepoFactory(config.mailRepoName)
    }
};
