import { Router } from 'express';
import asyncHandler from '../../../../middlewares/asyncHandler';
import { swapAsset } from './swaps.controller';

const router = Router();

router.all('/', asyncHandler(swapAsset));

export default router;
