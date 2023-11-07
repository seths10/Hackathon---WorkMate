import "./css/AllQuestions.css";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

type DataProp = {
  data: {
    tags: [{ name: string }];
    answerDetails: string;
    title: string;
    _id: number;
    create_at: string;
    user: {
      displayName: string;
    };
    body: string;
  };
};

function AllQuestions({ data }: DataProp) {
  const tags = data?.tags;
  return (
    <div className="all-questions rounded-lg border bg-gray-100">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link className="text-[#D65627]" to={`/community/view-question?q=${data?._id}`}>{data.title}</Link>

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>{data?.body}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((tag) => (
              <p className="my-[10px] mx-[5px] py-[2px] px-[8px] bg-blue-400 text-white rounded-full">
                {tag?.name}
              </p>
            ))}
          </div>
          <div className="author">
            <small>{data.create_at}</small>
            <div className="auth-details">
              <Avatar name={data?.user?.displayName} round size={"25"} />
              <p>
                {data?.user?.displayName
                  ? data?.user?.displayName
                  : "Natalie lee"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
