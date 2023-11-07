import * as React from "react";
import { siteTitle } from "../../constants/app";
import { APP_COMMUNITY } from "../../navigation/routes-constants";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";

const pages = [{ name: "Community", href: APP_COMMUNITY, current: true }];

const Community = () => {
  React.useEffect(() => {
    document.title = `Community | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <main className="flex-1">
        <div className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 className="mb-2 text-2xl font-semibold text-gray-700">
              Community
            </h1>
            <BreadCrumb pages={pages} />
          </div>

          <p>This is the Community page</p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Community;
