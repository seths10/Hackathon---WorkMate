import { Link } from "react-router-dom";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";

export type Prop = {
  questions: [
    {
      tags: string[];
      total_answers: number;
      title: string;
      _id: string;
      created_at: string;
      author: { author_id: number; author_name: string };
      content: string;
    }
  ];
};

function Main({ questions }: Prop) {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/community/ask-question">
            <button className="bg-[#D65627] outline-none rounded-lg border-none hover:bg-[#d65627de] h-[3rem] text-white">
              Ask Question
            </button>
          </Link>
        </div>
        <div className="main-desc">
          <p>{questions?.length} questions</p>
        </div>
        <div className="questions">
          {questions?.map((que) => (
            <div key={que._id} className="question">
              <AllQuestions data={que} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
