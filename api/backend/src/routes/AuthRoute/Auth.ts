import express from 'express';
import { signin, signup } from '../../controllers/AuthController/auth';

// express router
const router = express.Router()

// login router
router.post("/signin", signin) // user login route

// signup router
router.post("/signup", signup) // user registration route

export default router;
