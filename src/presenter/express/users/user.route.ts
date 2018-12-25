import { Router, Request, Response } from 'express';
import Config from './../Config';
import getUserById from './getUserById';
import getUsers from './getUsers';

export default (config: Config, router: any): Router => {


    router.get('/users/:user_id', getUserById(config));
    router.get('/users', getUsers(config));


    return router;
}
