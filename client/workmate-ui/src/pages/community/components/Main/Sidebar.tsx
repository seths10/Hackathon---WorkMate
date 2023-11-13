import { Link } from "react-router-dom";
import { APP_COMMUNITY } from "../../../../navigation/routes-constants";
import { HomeIcon } from "@heroicons/react/24/solid";
import "./css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <div className="gap-2">
             <div className="flex gap-2">
               <HomeIcon className="text-gray-900 w-5 h-5" />
               <Link to={APP_COMMUNITY} className="text-gray-900 font-bold">
                 HOME
               </Link>
             </div>

              <div className="mt-2 ml-7">
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
