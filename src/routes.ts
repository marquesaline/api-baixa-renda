import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .json('Hello World!');
});

router.get('/indices')

export default router;