import * as React from "react";
import { Route, Routes } from "react-router-dom";
import {
  APP_COMMUNITY,
  APP_DESK_BOOKING,
  ASK_QUESTION,
  LANDING,
  LOGIN,
  NOT_FOUND,
  SIGNUP,
  VIEW_QUESTION,
} from "./routes-constants";
import { TopLoader } from "../components/loaders/Loaders";

// lazy imports for pages
const LoginScreen = React.lazy(() => import("../pages/auth/login"));
const SignupScreen = React.lazy(() => import("../pages/auth/signup"));
const DeskBookingScreen = React.lazy(() => import("../pages/desk-booking"));
const CommunityScreen = React.lazy(() => import("../pages/community"));
const AskQuestionScreen = React.lazy(() => import("../pages/community/components/AddQuestion"));
const ViewQuestionScreen = React.lazy(() => import("../pages/community/components/ViewQuestion"));
const HomepageScreen = React.lazy(() => import("../pages/homepage"));
const NotFoundScreen = React.lazy(() => import("../pages/not-found"));

const RouterConfig = () => {
  return (
    <React.Fragment>
      {/* HashRouter has been declared in index.tsx in root directory */}
      <React.Suspense fallback={TopLoader()}>
        <Routes>
          {/* <Route element={<PrivateRoute />}> */}
          {/* <Route path={LANDING} element={<Sidebar />}> */}
          <Route
            index
            path={LANDING}
            element={
              <React.Suspense fallback={TopLoader()}>
                <HomepageScreen />
              </React.Suspense>
            }
          />
          <Route
            path={APP_COMMUNITY}
            element={
              <React.Suspense fallback={TopLoader()}>
                <CommunityScreen />
              </React.Suspense>
            }
          />
          <Route
            path={APP_DESK_BOOKING}
            element={
              <React.Suspense fallback={TopLoader()}>
                <DeskBookingScreen />
              </React.Suspense>
            }
          />
          <Route
            path={VIEW_QUESTION}
            element={
              <React.Suspense fallback={TopLoader()}>
                <ViewQuestionScreen />
              </React.Suspense>
            }
          />
          <Route
            path={ASK_QUESTION}
            element={
              <React.Suspense fallback={TopLoader()}>
                <AskQuestionScreen />
              </React.Suspense>
            }
          />
          {/* </Route> */}
          {/* </Route> */}

          <Route path={LOGIN} element={<LoginScreen />} />
          <Route path={SIGNUP} element={<SignupScreen />} />
          <Route path={NOT_FOUND} element={<NotFoundScreen />} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};

export default RouterConfig;
