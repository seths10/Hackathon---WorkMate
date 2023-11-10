import { useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../../../utils/axios-client";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { toast } from "sonner";
import "./index.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Avatar from "react-avatar";
import React from "react";

function MainQuestion() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const { userState } = useAuthContext();

  const fullName = userState?.data?.firstname + " " + userState?.data?.lastname

  const [questionData, setQuestionData] = useState({
    _id: "",
    title: "",
    created_at: "",
    content: "",
    views: 0,
    votes: 0,
    total_answers: 0,
    author: {
      author_name: "",
      author_id: "0",
    },
    tags: [""],
  });

  const [commentData, setCommentData] = useState([
    {
      _id: "",
      created_at: "",
      content: "",
      votes: 0,
      author: {
        author_name: "",
        author_id: "0",
      },
    },
  ]);

  const [answerData, setAnswerData] = useState([
    {
      _id: "",
      created_at: "",
      content: "",
      votes: 0,
      author: {
        author_name: "",
        author_id: "0",
      },
    },
  ]);

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

  const handleQuill = (value: never) => {
    setAnswer(value);
  };

  React.useEffect(() => {
    async function getFunctionDetails() {
      await instance
        .get(`/api/community/question/${id}`)
        .then((res) => {
          setQuestionData(res?.data?.data);
        })
        .catch((err) => console.log(err));
    }

    async function getComments() {
      await instance
        .get(`/api/community/comment/${id}`)
        .then((res) => {
          console.log(res?.data?.data);
          setCommentData(res?.data?.data);
        })
        .catch((err) => console.log(err));
    }

    async function getAnswers() {
      await instance
        .get(`/api/community/answer/${id}`)
        .then((res) => {
          console.log(res?.data?.data);
          setAnswerData(res?.data?.data);
        })
        .catch((err) => console.log(err));
    }
    getAnswers();
    getComments();
    getFunctionDetails();
  }, [id]);

  async function getUpdatedAnswer() {
    await instance
      .get(`/api/community/answer/${id}`)
      .then((res) => setAnswerData(res?.data?.data))
      .catch((err) => console.log(err));
  }

  async function getUpdatedComment() {
    await instance
      .get(`/api/community/comment/${id}`)
      .then((res) => setCommentData(res?.data?.data))
      .catch((err) => console.log(err));
  }

  const handleSubmit = async () => {
    const body = {
      question_id: id,
      content: answer,
      author: {
        author_id: userState?.data?.id,
        author_name: fullName
      },
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await instance
      .post("/api/community/answer/", body, config)
      .then(() => {
        toast.success("Answer added successfully");
        setAnswer("");
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };

  const handleComment = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        content: comment,
        author: {
          author_id: userState?.data?.id,
          author_name: fullName
        },
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await instance.post(`/api/community/comment`, body, config).then(() => {
        toast.success("Comment added successfully");
        setComment("");
        setShow(false);
        getUpdatedComment();
      });
    }
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title} </h2>
          <Link to="/community/ask-question">
            <button className="bg-[#D65627] w-fit rounded-lg outline-none border-none hover:bg-[#d65627de] text-white">
              Ask Question
            </button>
          </Link>
        </div>
        <div className="flex w-full">
          <div className="flex w-full gap-4 text-gray-500 text-sm">
            <p>
              Asked
              <span className="font-bold ">
                {" "}
                {new Date(questionData?.created_at).toLocaleString()}
              </span>
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
              <p className="font-normal text-larger" dangerouslySetInnerHTML={{ __html: questionData?.content }}></p>

              <div className="author bg-[#d656270c] px-2 py-2 rounded">
                <small>
                  asked {new Date(questionData?.created_at).toLocaleString()}
                </small>
                <div className="auth-details">
                  <Avatar
                    className="text-gray-500 w-4 h-4 rounded"
                    name={questionData?.author?.author_name}
                    size="25"
                  />
                  <p>
                    {questionData?.author?.author_name
                      ? questionData?.author?.author_name
                      : "Unknown"}
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  {commentData &&
                    commentData?.map((_qd) => (
                      <p key={_qd?._id}>
                        {_qd.content}{" "}
                        <span>
                          - {_qd.author ? _qd.author.author_name : "Unknown"}
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
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                      onClick={handleComment}
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
            {answerData && answerData?.length} Answer(s)
          </p>
          {answerData?.map((_q) => (
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
                  <div dangerouslySetInnerHTML={{ __html: _q?.content }}></div>
                  <div className="author bg-[#d656270c] px-2 py-2 rounded">
                    <small>
                      asked {new Date(_q.created_at).toLocaleString()}
                    </small>
                    <div className="auth-details ">
                      <Avatar
                        className="text-gray-500 w-4 h-4 rounded"
                        name={_q?.author?.author_name}
                        size={"25"}
                      />
                      <p>
                        {_q?.author?.author_name
                          ? _q?.author?.author_name
                          : "Unknown"}
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
        onClick={handleSubmit}
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
