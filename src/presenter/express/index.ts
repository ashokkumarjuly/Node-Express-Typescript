import { Router, Request, Response } from 'express';
import Config from './Config';
import enhancedRouter from './enhancedRouter';
import { getPosts, getPostById } from './posts';
import PostRoutes from './posts/post.route'

export default (config: Config): Router => {
    const router: Router = enhancedRouter(config);

    router.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: "This is where the awesomeness happen..." });
    });
    // router.get('/posts', getPosts(config));
    // router.get('/posts/:post_id', getPostById(config));
    router.use('/posts', PostRoutes(config, router));

    return router;
}
