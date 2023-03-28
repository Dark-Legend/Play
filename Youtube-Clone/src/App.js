import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./screens/AuthPages/SignIn/Login";
import SignUp from "./screens/AuthPages/SignUp/SignUp";
import Home from "./screens/Home/Home";
import PrivateRoute from "./Router/PrivateRoute/PrivateRoute";
import {
  dashboard,
  forgetpass,
  signin,
  signup,
  trending,
  videoPlayer,
} from "./Router/route";
import { useEffect } from "react";
import { hoursIntoMilliseconds } from "./Helper/helper";
import Trending from "./screens/Trending/Trending";
import UnprotectedRoutes from "./Router/UnprotectedRoute/UnprotectedRoutes";
import ForgetPassword from "./screens/AuthPages/ForgetPassword/ForgetPassword";
import VideoPage from "./screens/VideoPage/VideoPage";

function App() {
  const queryClient = new QueryClient();
  useEffect(() => {
    const timer = setTimeout(() => {
      window.localStorage.removeItem("auth");
      <Navigate to={signin} />;
    }, hoursIntoMilliseconds(1, 0, 0));

    return () => clearTimeout(timer);
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path={signin}
          element={
            <UnprotectedRoutes>
              <Login />
            </UnprotectedRoutes>
          }
        />
        <Route
          path={signup}
          element={
            <UnprotectedRoutes>
              <SignUp />
            </UnprotectedRoutes>
          }
        />
        <Route
          path={forgetpass}
          element={
            <UnprotectedRoutes>
              <ForgetPassword />
            </UnprotectedRoutes>
          }
        />
        <Route
          exact
          path={dashboard}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            exact
            path={dashboard}
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path={trending}
            element={
              <PrivateRoute>
                <Trending />
              </PrivateRoute>
            }
          />
          <Route
            path={videoPlayer}
            element={
              <PrivateRoute>
                <VideoPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
