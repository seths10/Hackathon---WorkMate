import { Request, Response } from "express";
import Question from "../../models/Community/Question";

export const postQuestion = async (req: Request, res: Response) => {
  const { title, content, tags, author_id, votes, views } = req.body;

  //   new question
  const newQuest = new Question({
    title,
    content,
    tags,
    author_id,
    votes,
    views,
  });

  const question = await newQuest.save();

  res.status(201).json({
    success: true,
    data: question,
  });
};

export const getQuestions = async (req: Request, res: Response) => {
  const question = Question.find({}).exec();
  res.status(200).json({
    success: true,
    data: question,
  });
};

export const getQuestionById = (req:Request, res:Response) => {
    const {id} = req.params;
    const question = Question.findById({id})
    if(!question){
        res.status(404).json({
            success: false,
            data: "Question not found"
        })
    }
    res.status(200).json({
        success: true,
        data: question,
    })
};

export const deleteQuestionById = (req:Request, res: Response) => {};
