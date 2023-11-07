import * as React from "react";
import { HomePageLayout } from "./layout";
import { siteTitle } from "../../constants/app";

const HomePage = () => {
  React.useEffect(() => {
    document.title = `HomePage | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <HomePageLayout>
        <main className="flex-1 bg-gray-50">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <p>This is the homepage component</p>
            </div>
          </div>
        </main>
      </HomePageLayout>
    </React.Fragment>
  );
};

export default HomePage;
