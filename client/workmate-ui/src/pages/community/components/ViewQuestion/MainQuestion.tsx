import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ReactQuill from "react-quill";
// import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Avatar from "react-avatar";

const questionData = {
  comments: [
    {
      _id: "3",
      user: { displayName: "Nunana" },
      comment: "Hello",
      created_at: "4-6-2012",
    },
  ],
  tags: [{ name: "support" }, { name: "tech" }],
  answerDetails: [
    {
      _id: 1,
      created_at: "4-6-2012",
      user: { displayName: "Nunana" },
      answer:
        "You’ve probably heard someone say, “If it’s on the internet, it’s not private.” That’s not totally true, however, since there are several ways you can ensure your privacy across digital platforms and services. Still, you should be concerned. Not everybody may be interested in your things, but somebody probably is",
    },
    {
      _id: 2,
      created_at: "4-6-2012",
      user: { displayName: "Private" },
      answer: "adfa",
    },
  ],
  title: "Should I be worried about my privacy?",
  _id: 3,
  created_at: "7-05-2023",
  user: { displayName: "Seth Addo" },
  body: "Should I be worried about my online privacy? If yes, how can I make sure I’m protected?",
};

function MainQuestion() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const id = params.get("q");

  // const [questionData, setQuestionData] = useState();
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const handleQuill = (value: never) => {
    setAnswer(value);
  };

  // useEffect(() => {
  //   async function getFunctionDetails() {
  //     await axios
  //       .get(`/api/question/${id}`)
  //       .then((res) => setQuestionData(res.data[0]))
  //       .catch((err) => console.log(err));
  //   }
  //   getFunctionDetails();
  // }, [id]);

  // async function getUpdatedAnswer() {
  //   await axios
  //     .get(`/api/question/${id}`)
  //     .then((res) => setQuestionData(res.data[0]))
  //     .catch((err) => console.log(err));
  // }

  // const handleSubmit = async () => {
  //   const body = {
  //     question_id: id,
  //     answer: answer,
  //     user: user,
  //   };
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   await axios
  //     .post("/api/answer", body, config)
  //     .then(() => {
  //       alert("Answer added successfully");
  //       setAnswer("");
  //       getUpdatedAnswer();
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleComment = async () => {
  //   if (comment !== "") {
  //     const body = {
  //       question_id: id,
  //       comment: comment,
  //       user: user,
  //     };
  //     await axios.post(`/api/comment/${id}`, body).then((res) => {
  //       setComment("");
  //       setShow(false);
  //       getUpdatedAnswer();
  //       // console.log(res.data);
  //     });
  //   }

  // setShow(true)

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title} </h2>
          <Link to="/community/ask-question">
            <button className="bg-[#D65627] rounded-lg outline-none border-none hover:bg-[#d65627de] h-[3rem] text-white">
              Ask Question
            </button>
          </Link>
        </div>
        <div className="flex w-full">
          <div className="flex w-full gap-4 text-gray-500 text-sm">
            <p>
              Asked
              <span className="font-bold "> {new Date(questionData?.created_at).toLocaleString()}</span>
            </p>
            <p>
              Active<span className="font-bold"> today</span>
            </p>
            <p>
              Viewed <span className="font-bold">43 times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options gap-3">
                <div className="rounded-full border border-gray-300 px-2.5 py-1.5">
                  <p className="text-[2rem] text-[#000000] -mt-1 text-lg">▲</p>
                </div>
                <p className="text-[2rem] text-xl font-bold text-[#000000]">
                  0
                </p>

                <div className="rounded-full border border-gray-300 px-2.5 py-1.5">
                  <p className="text-[2rem] text-[#000000] -mt-1 text-lg">▼</p>
                </div>
              </div>
            </div>
            <div className="question-answer">
              <p className="font-normal text-larger">{questionData?.body}</p>

              <div className="author bg-[#d656270c] px-2 py-2 rounded">
                <small>
                  asked {new Date(questionData?.created_at).toLocaleString()}
                </small>
                <div className="auth-details">
                  <Avatar
                    name={questionData?.user?.displayName}
                    size="25"
                    round
                  />
                  <p>
                    {questionData?.user?.displayName
                      ? questionData?.user?.displayName
                      : "Natalia lee"}
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  {questionData?.comments &&
                    questionData?.comments.map((_qd) => (
                      <p key={_qd?._id}>
                        {_qd.comment}{" "}
                        <span>
                          - {_qd.user ? _qd.user.displayName : "Nate Eldredge"}
                        </span>{" "}
                        {"    "}
                        <small>
                          {new Date(_qd.created_at).toLocaleString()}
                        </small>
                      </p>
                    ))}
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      // type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                      // onClick={handleComment}
                      style={{
                        maxWidth: "fit-content",
                      }}
                      className="bg-[#D65627] outline-none rounded-lg border-none hover:bg-[#d65627de] h-[3rem] text-white"
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "500",
            }}
          >
            {questionData && questionData?.answerDetails.length} Answers
          </p>
          {questionData?.answerDetails.map((_q) => (
            <>
              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
                key={_q._id}
                className="all-questions-container pb-3 mt-1"
              >
                <div className="all-questions-left">
                  <div className="all-options gap-3">
                    <div className="rounded-full border border-gray-300 px-2.5 py-1.5">
                      <p className="text-[2rem] text-[#000000] -mt-1 text-lg">
                        ▲
                      </p>
                    </div>
                    <p className="text-[2rem] text-xl font-bold text-[#000000]">
                      0
                    </p>

                    <div className="rounded-full border border-gray-300 px-2.5 py-1.5">
                      <p className="text-[2rem] text-[#000000] -mt-1 text-lg">
                        ▼
                      </p>
                    </div>
                  </div>
                </div>
                <div className="question-answer">
                  {_q.answer}
                  <div className="author bg-[#d656270c] px-2 py-2 rounded">
                    <small>
                      asked {new Date(_q.created_at).toLocaleString()}
                    </small>
                    <div className="auth-details ">
                      <Avatar
                        className="text-gray-500 w-4 h-4 rounded"
                        // round
                        name={_q?.user?.displayName}
                        size={"25"}
                      />
                      <p>
                        {_q?.user?.displayName
                          ? _q?.user?.displayName
                          : "Natalia lee"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>

        <ReactQuill
          value={answer}
          modules={modules}
          formats={formats}
          onChange={handleQuill}
        />
      </div>
      <button
        // onClick={handleSubmit}
        className="bg-[#D65627] outline-none rounded-lg border-none hover:bg-[#d65627de] h-[3rem] text-white"
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  );
}
export default MainQuestion;
