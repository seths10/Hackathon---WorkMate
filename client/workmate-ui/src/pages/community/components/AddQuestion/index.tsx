import * as React from "react";
import { SetStateAction, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { APP_COMMUNITY } from "../../../../navigation/routes-constants";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { instance } from "../../../../utils/axios-client";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { siteTitle } from "../../../../constants/app";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";

function Index() {
  const navigate = useNavigate();
  const { userState } = useAuthContext();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState<string[]>([]);

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

  const handleQuill = (value: SetStateAction<string>) => {
    setBody(value);
  };

  const handleSubmit = async () => {
    if (title !== "" && body !== "") {
      const bodyJSON = {
        title: title,
        content: body,
        tags: tag,
        author: {
          author_id: userState?.data?.id,
          author_name: userState?.data?.firstname,
        },
      };
      await instance
        .post("/api/community/question", bodyJSON)
        .then(() => {
          toast.success("Question added successfully");
          navigate(APP_COMMUNITY);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  React.useEffect(() => {
    document.title = `Ask Question | ${siteTitle}`;
  }, []);

  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <Link to={APP_COMMUNITY}>
            <button className="">
              <ArrowLeftIcon className="w-5 h-5 hover:text-[#d65627de] text-gray-500" />
            </button>
          </Link>
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3 className="mb-1 font-bold">Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a vector?"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3 className="mb-1 font-bold">Body</h3>
                <small className="mb-1">
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill
                  value={body}
                  modules={modules}
                  formats={formats}
                  onChange={handleQuill}
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3 className="mb-1 font-bold">Tags</h3>
                <small className="mb-1">
                  Add up to 5 tags to describe what your question is about
                </small>

                <TagsInput
                  value={tag}
                  onChange={(newTag) => setTag(newTag)}
                  name="chapters"
                  classNames={{
                    input: "focus:border-gray-100",
                    tag: "bg-gray-100",
                  }}
                  placeHolder="press enter to add new tag"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#D65627] outline-none border-none hover:bg-[#d65627de] h-[3rem] text-white"
        >
          Add your question
        </button>
      </div>
    </div>
  );
}

export default Index;
