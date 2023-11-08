import "./css/AllQuestions.css";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { getDateAndTimeFromISOString } from "../../../../utils/utils";

type DataProp = {
  data: {
    tags: string[];
    total_answers: string;
    title: string;
    _id: number;
    created_at: string;
    author: { author_id: number, author_name: string };
    content: string;
  }
};

function AllQuestions({ data }: DataProp) {
  return (
    <div className="all-questions rounded-lg border bg-gray-100">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            {/* <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div> */}
            <div className="all-option">
              <p>{data?.total_answers}</p>
              <span>answers</span>
            </div>
            {/* <div className="all-option">
              <small>2 views</small>
            </div> */}
          </div>
        </div>
        <div className="question-answer text-sm text-gray-700">
          <Link className="text-[#D65627]" to={`/community/view-question?q=${data?._id}`}>{data.title}</Link>

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div dangerouslySetInnerHTML={{__html: data?.content}}></div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {data?.tags.map((tag) => (
              <p key={tag} className="my-[10px] mx-[5px] text-sm py-[2px] px-[8px] bg-[#f874441a] text-[#d65627] rounded-lg">
                {tag}
              </p>
            ))}
          </div>
          <div className="author ">
            <small>{getDateAndTimeFromISOString(data.created_at)}</small>
            <div className="auth-details">
              <Avatar name={data?.author?.author_name} round size={"25"} />
              <p>
                {data?.author?.author_name
                  ? data?.author?.author_name
                  : "Anonymous"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
