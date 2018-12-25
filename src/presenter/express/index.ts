import { Router, Request, Response } from 'express';
import Config from './Config';
import enhancedRouter from './enhancedRouter';

import PostRoutes from './posts/post.route'
import AuthRoutes from './auth/auth.route';
import UserRoutes from './users/user.route';


export default (config: Config): Router => {
    const router: Router = enhancedRouter(config);

    router.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: "This is where the awesomeness happen..." });
    });

    router.use('/auth', AuthRoutes(config, router));
    router.use('/users', UserRoutes(config, router));
    router.use('/posts', PostRoutes(config, router));

    return router;
}
