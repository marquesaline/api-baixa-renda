import { Router } from 'express';
import IndexController from './controllers/index.controller';

const router = Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .json('Hello World!');
});

router.get('/indexes', IndexController.getAll);

export default router;