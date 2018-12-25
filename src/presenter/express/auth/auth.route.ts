import { Router, Request, Response } from 'express';
import Config from './../Config';
import register from './register';
import login from './login';
import forgetPassword from './login';
import resetPassword from './login';


export default (config: Config, router: any): Router => {

    router.post('/register', register(config));
    router.post('/login', login(config));
    router.post('/forget-password', forgetPassword(config));
    router.post('/reset-password', resetPassword(config));


    return router;
}
