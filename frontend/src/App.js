import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
