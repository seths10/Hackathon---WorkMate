import { Request, Response } from "express";
import Question from "../../models/CommunityModel/Question";
import Answer from "../../models/CommunityModel/Answer";
import Comment from "../../models/CommunityModel/Comment";

export const postQuestion = async (req: Request, res: Response) => {
  const { title, content, tags, author_id, votes, views } = req.body;
  try {
    //   new question
    const newQuestion = new Question({
      title,
      content,
      tags,
      author_id,
    });

    const question = await newQuestion.save();

    res.status(201).json({
      success: true,
      data: question,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const question = await Question.find({}).exec();
    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const getQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
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

export const deleteQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({
        success: false,
        data: "Not found",
      });
    }

    await Question.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: "Question removed",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const getAnswersByQuestionId = async (req: Request, res: Response) => {
    const { question_id } = req.params;
    try {
        const answer = await Answer.find({question_id}).exec();
    
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
  


export const postAnswer = async (req: Request, res: Response) => {
  const { content, question_id, author_id } = req.body;
  try {
    const newAnswer = new Answer({
      content,
      question_id,
      author_id,
    });

    const question = await newAnswer.save();

    return res.status(201).json({
      success: true,
      data: question,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

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
      data: "Question removed",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export const postComment = async (req: Request, res: Response) => {
  const { question_id, author_id, content } = req.body;

  try {
    const newComment = new Comment({
      question_id,
      author_id,
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
