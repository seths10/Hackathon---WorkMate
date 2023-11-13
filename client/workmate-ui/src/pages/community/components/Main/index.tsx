import * as React from "react";
import { instance } from "../../../../utils/axios-client";
import Sidebar from "./Sidebar";
import Main, { Prop } from "./Main";
import "./css/index.css";

function Index() {
  const [questions, setQuestions] = React.useState();

  React.useEffect(() => {
    async function getQuestion() {
      await instance.get(`/api/community/question`).then((res) => {
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
