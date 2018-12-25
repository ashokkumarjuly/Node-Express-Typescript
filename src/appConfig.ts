import { ONE_HOUR } from './constants';
import * as Joi from 'joi';
import * as dotenv from "dotenv";
dotenv.config();

let path;
switch (process.env.NODE_ENV) {
    case "test":
        path = `${__dirname}/../.env.test`;
        break;
    case "production":
        path = `${__dirname}/../.env.production`;
        break;
    default:
        path = `${__dirname}/../.env.development`;
}
dotenv.config({ path: path });


// define validation for all the env vars
const envVarsSchema = Joi.object({
    // SERVER Configurations
    NODE_ENV: Joi.string().allow(['development', 'production', 'test']).default('development'),
    LANG: Joi.string().allow(['en', 'es']).default('en'),
    TIMEZONE: Joi.string().default('+00:00'),
    EXPRESS_PORT: [Joi.string(), Joi.number()],
    EXPRESS_MORGAN_DIRECTORY: Joi.string().default(`${process.cwd()}/logs/access`),
    WINSTON_DIRECTORY: Joi.string().default(`${process.cwd()}/logs`),
    EXPRESS_MORGAN_LOG_FORMAT: Joi.string().default(':method :url :remote-addr :referrer :date :status'),
    WINSTON_LEVEL: Joi.string().default('info'),

    MODEL_REPO_NAME: Joi.string().default('sequelize'),
    MODEL_MAIL_REPO: Joi.string().default('nodemailer'),
    // JWT Configurations
    JWT_SECRET: Joi.string().required().description('JWT Secret required to sign'),
    JWT_EXPIRES_IN: Joi.number().default(ONE_HOUR),
    JWT_ALGORITM: Joi.string().default('HS256'),

    WEB_HOST: Joi.string(),
    SERVER_VERSION: [Joi.string(), Joi.number()],
    SERVER_TIMEZONE: Joi.string().default('+00:00'),
    HTTPS: Joi.boolean().default(false),
    RATE_LIMITER: Joi.boolean().default(false).description('Rate limiter option should be boolean'),

    // DB Configurations
    DB_DIALECT: Joi.string().required().description('Database dialect required'),
    DB_HOSTNAME: Joi.string().required().description('Database host required'),
    DB_PORT: Joi.number().required().description('Database Port required'),
    DB_USERNAME: Joi.string().required().description('Database username required'),
    DB_PASSWORD: Joi.string().required().description('Database password required'),
    DB_NAME: Joi.string().required().description('Database Name required'),
    DB_OPERATOR_ALIASES: Joi.boolean().default(false),

    // Email Configurations
    EMAIL_HOST: Joi.string().required().description('Email host required'),
    EMAIL_PORT: Joi.number().required().description('Email port required'),
    EMAIL_SSL: Joi.boolean().description('Email SSL option should be boolean'),
    EMAIL_USERNAME: Joi.string().required().description('Email usernmae required'),
    EMAIL_PASSWORD: Joi.string().required().allow('').description('Email password required'),
    EMAIL_DEBUG: Joi.boolean().description('Email debug option should be boolean')
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
export interface Config {
    lang: string;
    timezone: string,
    express: any;
    sequelize: any;
    winston: any;
    jwt: any;
    mail: any;
    modelRepo: any;
    mailRepo: any;
    nodemailer: any;
}

export default {
    lang: process.env.LANG || envVars.LANG,
    timezone: process.env.TIMEZONE || envVars.TIMEZONE,
    express: {
        env: process.env.NODE_ENV || envVars.NODE_ENV,
        port: process.env.EXPRESS_PORT || envVars.EXPRESS_PORT,
        testPort: process.env.EXPRESS_PORT || envVars.EXPRESS_PORT,
        morganDirectory:
            process.env.EXPRESS_MORGAN_DIRECTORY || envVars.EXPRESS_MORGAN_DIRECTORY,
        morganLogFormat:
            process.env.EXPRESS_MORGAN_LOG_FORMAT || envVars.EXPRESS_MORGAN_LOG_FORMAT
    },
    jwt: {
        secret: process.env.JWT_SECRET || envVars.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || envVars.JWT_EXPIRES_IN,
        algoritm: process.env.JWT_ALGORITM || envVars.JWT_ALGORITM,
    },
    mail: {
        from: process.env.MAIL_FROM || envVars.MAIL_FROM,
        to: process.env.MAIL_TO || envVars.MAIL_TO,
        port: process.env.MAIL_PORT || envVars.MAIL_PORT
    },
    sequelize: {
        username: process.env.DB_USERNAME || envVars.DB_USERNAME,
        password: process.env.DB_PASSWORD || envVars.DB_PASSWORD,
        database: process.env.DB_NAME || envVars.DB_NAME,
        connectionOptions: {
            host: process.env.DB_HOSTNAME || envVars.DB_HOSTNAME,
            port: process.env.DB_PORT || envVars.DB_PORT,
            dialect: process.env.DB_DIALECT || envVars.DB_DIALECT,
            logging: (process.env.NODE_ENV != 'production') ? true : false,
            omitNull: true,
            timezone: process.env.TIMEZONE || envVars.TIMEZONE,
            define: {
                underscored: true,
                freezeTableName: true,
                charset: 'utf8',
                dialectOptions: {
                    collate: 'utf8_general_ci'
                },
                timestamp: true,
                created_at: 'created_at',
                updated_at: 'updated_at'
            }
        },
        operatorsAliases: process.env.DB_OPERATOR_ALIASES || envVars.DB_OPERATOR_ALIASES
    },
    modelRepo: {
        name: process.env.MODEL_REPO_NAME || envVars.MODEL_REPO_NAME,
    },
    mailRepo: {
        name:
            process.env.MODEL_MAIL_REPO || envVars.MODEL_MAIL_REPO
    },
    winston: {
        level: process.env.WINSTON_LEVEL || envVars.WINSTON_LEVEL,
        winstonDirectory: process.env.WINSTON_DIRECTORY || envVars.WINSTON_DIRECTORY,
    }
} as Config;
