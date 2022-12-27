import { Router } from 'express';
import IndexController from './controllers/index.controller';

const router = Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .json('Hello World!');
});

router.get('/indexes', IndexController.getAll);

router.get('/indexes/:id', IndexController.getById);

router.post('/indexes', IndexController.create);

router.put('/indexes/:id', IndexController.update);

router.delete('/indexes/:id', IndexController.delete);

export default router;