import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";
import { questions } from "../../../../data/dummy";
// import axios from "axios";

function Index() {
  // const [questions, ] = useState([]);

  // useEffect(() => {
  //   async function getQuestion() {
  //     await axios.get("/api/question").then((res) => {
  //       setQuestions(res.data.reverse());
  //       // console.log(res.data)
  //     });
  //   }
  //   getQuestion();
  // }, []);

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
