import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "./index.css";

function Index() {
  const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const [tag, ] = useState([]);
  // const navigate = useNavigate();

  // const handleQuill = (value) => {
  //   setBody(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (title !== "" && body !== "") {
  //     const bodyJSON = {
  //       title: title,
  //       body: body,
  //       tag: JSON.stringify(tag),
  //       user: user,
  //     };
  //     await axios
  //       .post("/api/question", bodyJSON)
  //       .then((res) => {
  //         // console.log(res.data);
  //         alert("Question added successfully");
  //         history.push("/");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
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
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>

                <TagsInput
                  value={tag}
                  // onChange={setTag}
                  name="fruits"
                  placeHolder="press enter to add new tag"
                />

                {/* <ChipsArray /> */}
              </div>
            </div>
          </div>
        </div>

        <button
          // onClick={handleSubmit}
          className="submit"
        >
          Add your question
        </button>
      </div>
    </div>
  );
}

export default Index;
