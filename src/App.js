/** @format */

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home, Login, SignUp, Dashboard } from "./pages";
import { StateContext } from "./context/StateContext";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const loggedIn = sessionStorage.getItem("key") ? true : false;

  console.log(loggedIn);
  return (
    <Router>
      <StateContext>
        <Toaster />
        <Routes>
          <Route
            exact
            path={"/"}
            element={loggedIn ? <Dashboard /> : <Home />}
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route
            exact
            path={`${loggedIn ? "/dashboard" : "/login"}`}
            element={loggedIn ? <Dashboard /> : <Login />}
          />
          <Route
            exact
            path={`${loggedIn ? "/dashboard" : "/signup"}`}
            element={loggedIn ? <Dashboard /> : <SignUp />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </StateContext>
    </Router>
  );
}

export default App;
