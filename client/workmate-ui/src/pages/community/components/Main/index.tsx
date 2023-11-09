import * as React from "react";
import { instance } from "../../../../utils/axios-client";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";

function Index() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    async function getQuestion() {
      await instance.get(`/api/community/question`).then((res) => {
        console.log(res?.data?.data)
        setQuestions(res?.data?.data);
      });
    }
    getQuestion();
  }, []);

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
