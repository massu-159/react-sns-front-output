import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./state/AuthContext";
import { useContext } from "react";


function App() {
const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* ホーム（アカウントがなければ新規登録へ） */}
        <Route path="/" element={user ? <Home></Home> : <Register></Register>}></Route>
        {/* ログイン（アカウントがなければリダイレクト） */}
        <Route path="/login" element={user ? <Navigate to="/"></Navigate> : <Login></Login>}></Route>
        {/* 新規登録（アカウントがなければリダイレクト） */}
        <Route path="/register" element={user ? <Navigate to="/"></Navigate> : <Register></Register>}></Route>
        {/* プロフィール */}
        <Route path="/profile/:username" element={<Profile></Profile>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
