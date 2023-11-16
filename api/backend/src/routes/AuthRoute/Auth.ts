import express from 'express';
import { signin, signup } from '../../controllers/AuthController/auth';

// express router
const router = express.Router()

// signup router
router.post("/signup", signup) // user registration route

// login router
router.post("/signin", signin) // user login route

export default router;
