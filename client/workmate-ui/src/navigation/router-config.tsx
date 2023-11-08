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
import { useAuthContext } from "../hooks/useAuthContext";


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
  const { userState } = useAuthContext();

  return (
    <React.Fragment>
      {/* HashRouter has been declared in index.tsx in root directory */}
      <React.Suspense fallback={TopLoader()}>
        <Routes>
          <Route
            index
            path={LANDING}
            element={
              userState?.userToken ? (
                <React.Suspense fallback={TopLoader()}>
                  <HomepageScreen />
                </React.Suspense>
              ) : (
                <Navigate to={LOGIN} />
              )
            }
          />
          <Route
            path={APP_COMMUNITY}
            element={
              userState?.userToken ? (
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
              userState?.userToken ? (
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
              userState?.userToken ? (
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
              userState?.userToken ? (
                <React.Suspense fallback={TopLoader()}>
                  <AskQuestionScreen />
                </React.Suspense>
              ) : (
                <Navigate to={LOGIN} />
              )
            }
          />

          <Route
            path={LOGIN}
            element={!userState?.userToken ? <LoginScreen /> : <Navigate to={LANDING} />}
          />
          <Route
            path={SIGNUP}
            element={!userState?.userToken ? <SignupScreen /> : <Navigate to={LANDING} />}
          />
          <Route path={NOT_FOUND} element={<NotFoundScreen />} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};

export default RouterConfig;
