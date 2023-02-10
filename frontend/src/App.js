import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from './components/pages/login/Login'
import SignUp from "./components/pages/signUp/SignUp";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
