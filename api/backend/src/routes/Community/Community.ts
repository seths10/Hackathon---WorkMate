import express from "express";
import {
  postQuestion,
  getQuestionById,
  getQuestions,
  deleteQuestionById,
} from "../../controllers/Community/Community";

const router = express.Router();

// routes
// post question, get answers, get all questions, add comment to questions
// answers

router.post("/question", postQuestion);

router.get("/question", getQuestions);

router.get("/question:id", getQuestionById);

router.delete("/question:id", deleteQuestionById)

export default router;
