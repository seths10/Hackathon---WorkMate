import * as React from "react";
import { siteTitle } from "../../constants/app";
import Header from "./components/Header";
import Index from "./components/Main";

const Community = () => {
  React.useEffect(() => {
    document.title = `Community | ${siteTitle}`;
  }, []);

  return (
    <React.Fragment>
      <main className="flex-1">
        <Header />
        <Index />
      </main>
    </React.Fragment>
  );
};

export default Community;
