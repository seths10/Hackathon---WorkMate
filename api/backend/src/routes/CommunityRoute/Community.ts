import express from "express";
import {
  postQuestion,
  getQuestionById,
  getQuestions,
  deleteQuestionById,
  postAnswer,
  deleteAnswerById,
  postComment,
  getComment,
  getAnswersByQuestionId,
  deleteComment,
} from "../../controllers/CommunityController/Community";

const router = express.Router();

// Questions
router.post("/question", postQuestion); // post a question 

router.get("/question", getQuestions); // get all questions 

router.get("/question/:id", getQuestionById); // get a particular question by id

router.delete("/question/:id", deleteQuestionById); // delete a question by id

// Answers
router.post("/answer", postAnswer); // post an answer to a question

router.get("/answer/:question_id", getAnswersByQuestionId) // get an answer to a question by the question id

router.delete("/answer/:id", deleteAnswerById);  // delete or remove an answer by the answer's id

// Comment
router.post("/comment", postComment); // post a comment on a question

router.get("/comment/:question_id", getComment); // get all comments on a particular question

router.delete("/comment/:id", deleteComment); // delete a comment


export default router;
