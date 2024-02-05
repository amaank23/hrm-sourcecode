import Sidebar from "./layout/Sidebar";
import Login from "./pages/Auth/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAttendence from "./pages/Attendence/MyAttendence";
import { useSelector } from 'react-redux'

function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to={"/dashboard"} /> : <Login />} />
        <Route
          path="/dashboard/*"
          element={ isAuth ? 
            <>
              <Sidebar>
                <Routes>
                  <Route index element={<Dashboard />} />
                  <Route path="/my-attendence" element={<MyAttendence />} />
                </Routes>
              </Sidebar>
            </> : <Navigate to={"/"} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
