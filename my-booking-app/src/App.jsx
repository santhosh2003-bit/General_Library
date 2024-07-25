import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Books from "./Components/Books/Books";
import AdminOpra from "./Components/AdminOperation/AdminOpra";
import Adding from "./Components/AdminOperation/Adding";
import Remove from "./Components/AdminOperation/Remove";
import Update from "./Components/AdminOperation/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Books />} />
          <Route path="/operations" element={<AdminOpra />} />
          <Route path="/operations/adding" element={<Adding />} />
          <Route path="/operations/remove" element={<Remove />} />
          <Route path="/operations/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
