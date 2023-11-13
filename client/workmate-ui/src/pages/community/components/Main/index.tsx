import * as React from "react";
import { instance } from "../../../../utils/axios-client";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./css/index.css";

function Index() {
  const [questions, setQuestions] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    async function getQuestion() {
      await instance.get(`/api/community/question`).then((res) => {
        setQuestions(res?.data?.data);
        setIsLoading(false);
      });
    }
    getQuestion();
  }, []);

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Index;
