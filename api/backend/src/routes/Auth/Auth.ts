import express from 'express';
import { signin, signup } from '../../controllers/Auth/auth';

// express router
const router = express.Router()

// login router
router.post("/signin", signin)


// signup router
router.post("/signup", signup)

export default router;
