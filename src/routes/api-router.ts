import { Router } from 'express';
import { selfCall } from '../controllers/api-controller';

const router = Router();

// router.route("self").get()
router.get("/self", selfCall)


export default router;