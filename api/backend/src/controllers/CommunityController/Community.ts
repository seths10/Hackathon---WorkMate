import { Request, Response } from "express";
import Question from "../../models/CommunityModel/Question";
import Answer from "../../models/CommunityModel/Answer";
import Comment from "../../models/CommunityModel/Comment";

// post a question to workmate
export const postQuestion = async (req: Request, res: Response) => {
  const { title, content, tags, author, votes, views } = req.body;
  try {
    // check passed data
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        data: "Provide the title and content of question",
      });
    }
    // new question instance
    const newQuestion = new Question({
      title,
      content,
      tags,
      author,
    });

    const question = await newQuestion.save();

    res.status(201).json({
      success: true,
      data: question,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      msg: "Internal Server Error",
    });
  }
};

// get all questions from workmate
export const getQuestions = async (req: Request, res: Response) => {
  try {
    // get all questions with comments
    const question = await Question.find({}).populate("comments").exec();
    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// get a particular question
export const getQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // find a question by id with it's comment
    const question = await Question.findById(id).populate("comments").exec();

    if (!question) {
      return res.status(404).json({
        success: false,
        data: "Question not found",
      });
    }

    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// delete a question from workmate
export const deleteQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    // checking if question exists
    if (!question) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    // removing the existing question
    await Question.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: "Question removed",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// get a specific/particular answer from workmate
export const getAnswersByQuestionId = async (req: Request, res: Response) => {
  const { question_id } = req.params;
  try {
    const answer = await Answer.find({ question_id })
      .populate("comments")
      .exec();

    if (!answer) {
      return res.status(404).json({
        success: false,
        data: "Answer not found",
      });
    }
    res.status(200).json({
      success: true,
      data: answer,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// post an answer to workmate
export const postAnswer = async (req: Request, res: Response) => {
  const { content, question_id, author } = req.body;
  try {
    if (!content) {
      return res.status(400).json({
        success: false,
        data: "Provide the content",
      });
    }

    const newAnswer = new Answer({
      content,
      question_id,
      author,
    });

    const answer = await newAnswer.save();

    const question = await Question.findById(question_id).exec();

    console.log(question)

    if (question) {
      question.total_answers += 1;
    }

    await question?.save();

    return res.status(201).json({
      success: true,
      data: answer,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// remove an answer by id
export const deleteAnswerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const answer = await Answer.findById(id);

    if (!answer) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    await Answer.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: "Answer removed",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// comment on a question
export const postComment = async (req: Request, res: Response) => {
  const { question_id, author, content } = req.body;

  try {
    if (!content) {
      return res.status(400).json({
        success: false,
        data: "Provide the content",
      });
    }

    const newComment = new Comment({
      question_id,
      author,
      content,
    });

    const question = await newComment.save();

    res.status(201).json({
      success: true,
      data: question,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// get comments to a question
export const getComment = async (req: Request, res: Response) => {
  const { question_id } = req.params;
  try {
    const comment = await Comment.find({ question_id })
      .populate("author", "firstname")
      .exec();

    if (!comment) {
      return res.status(404).json({
        success: false,
        data: "Comment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: comment,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// remove a comment
export const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    await Comment.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: "Comment removed",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
