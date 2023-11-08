import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import "./css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <div className="flex gap-1">
              <HomeIcon className="text-gray-600 w-5 h-5" />
              <Link to="/" className="font-bold">HOME</Link>
            </div>
            <div className="link mt-3">
              <div className="link-tag">
                <div>Chapters</div>

                {/* <a href="/">Question</a> */}
              </div>

              <div className="tags">
                <p>Front End</p>
                <p>Back End</p>
                <p>DevOps</p>
                <p>UI/UX</p>
                <p>QA</p>
                <p>Product Management</p>
                <p>Testing</p>
                <p>Data Science</p>
                <p>Others</p>
              </div>
            </div>
          </div>
          {/* <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <StarIcon className="text-gray-600 w-5 h-5" />
                <Link to="/">Explore Collectives</Link>

              </div>
            </div>
          </div> */}
          {/* <div className="sidebar-option">
            <p>FIND A JOB</p>
            <div className="link">
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/"
              >
                Jobs
              </Link>
              
              <Link
                style={{
                  marginLeft: "20px",
                }}
                to="/"
              >
                Companies
              </Link>
            </div>
          </div> */}
          {/* <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <BriefcaseIcon className="text-gray-600 w-5 h-5" />
              <Link to="/">Companies</Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
