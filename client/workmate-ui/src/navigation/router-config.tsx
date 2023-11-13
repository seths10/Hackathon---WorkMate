import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
const AskQuestionScreen = React.lazy(
  () => import("../pages/community/components/AddQuestion")
);
const ViewQuestionScreen = React.lazy(
  () => import("../pages/community/components/ViewQuestion")
);
const HomepageScreen = React.lazy(() => import("../pages/homepage"));
const NotFoundScreen = React.lazy(() => import("../pages/not-found"));

const RouterConfig = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <React.Fragment>
      <React.Suspense fallback={TopLoader()}>
        <Routes>
          <Route
            path={LANDING}
            element={
              user ? (
                <React.Suspense fallback={TopLoader()}>
                  <HomepageScreen />
                </React.Suspense>
              ) : (
                <div>
                  <Navigate to={LOGIN} />
                </div>
              )
            }
          />

          <Route
            path={APP_COMMUNITY}
            element={
              user ? (
                <React.Suspense fallback={TopLoader()}>
                  <CommunityScreen />
                </React.Suspense>
              ) : (
                <Navigate to={LOGIN} />
              )
            }
          />
          <Route
            path={APP_DESK_BOOKING}
            element={
              user ? (
                <React.Suspense fallback={TopLoader()}>
                  <DeskBookingScreen />
                </React.Suspense>
              ) : (
                <Navigate to={LOGIN} />
              )
            }
          />
          <Route
            path={VIEW_QUESTION}
            element={
              user ? (
                <React.Suspense fallback={TopLoader()}>
                  <ViewQuestionScreen />
                </React.Suspense>
              ) : (
                <Navigate to={LOGIN} />
              )
            }
          />
          <Route
            path={ASK_QUESTION}
            element={
              user ? (
                <React.Suspense fallback={TopLoader()}>
                  <AskQuestionScreen />
                </React.Suspense>
              ) : (
                <Navigate to={LOGIN} />
              )
            }
          />

          <Route
            index
            path={LOGIN}
            element={!user ? <LoginScreen /> : <Navigate to={LOGIN} />}
          />
          <Route
            path={SIGNUP}
            element={!user ? <SignupScreen /> : <Navigate to={LOGIN} />}
          />
          <Route path={NOT_FOUND} element={<NotFoundScreen />} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};

export default RouterConfig;
