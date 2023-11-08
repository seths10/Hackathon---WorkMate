import express from "express";
import {
  postQuestion,
  getQuestionById,
  getQuestions,
  deleteQuestionById,
  postAnswer,
  deleteAnswerById,
  postComment,
  getAnswersByQuestionId
} from "../../controllers/CommunityController/Community";

const router = express.Router();

// Questions
router.post("/question", postQuestion);

router.get("/question", getQuestions);

router.get("/question/:id", getQuestionById);

router.delete("/question/:id", deleteQuestionById);


// Answers
router.get("/answer/:question_id", getAnswersByQuestionId)

router.post("/answer", postAnswer);

router.delete("/answer/:id", deleteAnswerById);

// Comment
router.post("/comment", postComment);


export default router;
