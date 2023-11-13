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
              <Link to="/" className="font-bold">
                HOME
              </Link>

              <div className="mt-5">
                <div className="link-tag">
                  <div>Chapters</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
