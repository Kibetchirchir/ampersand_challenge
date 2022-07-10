import { Router } from 'express';
import swap from './swaps/swaps.route';

const router = Router();

router.all('/swap', swap);

export default router;
