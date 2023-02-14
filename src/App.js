import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Home from "./pages/item/Home";
import Item from "./pages/item/Item";
import Create from "./pages/item/Create";
import Update from "./pages/item/Update";
import Delete from "./pages/item/Delete";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/item/create" element={<Create />} />
        <Route path="/item/update/:id" element={<Update />} />
        <Route path="/item/delete/:id" element={<Delete />} />
        <Route path="*" element={<h1>PageNotFound</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
