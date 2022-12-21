import { Sequelize } from  'sequelize-typescript';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } from '../config/env';
import { Index } from './models/index.model';

const db_connection = new Sequelize({
    dialect: 'mysql',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    logging: false,
    models: [Index]
});

export default db_connection;