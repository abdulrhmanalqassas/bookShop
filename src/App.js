import "./App.css";
import Header from "./components/header/Header";
import CardCont from "./components/home/CardCont";
import Book from "./components/Book";
import { Routes, Route } from "react-router-dom";
import Search from "./components/header/Search";
import BestSeller from "./components/BestSeller";
import {NYRPage } from "./components/NYRPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/*" element={<CardCont />} />
        <Route path="/bookShop/book" element={<Book />} />
        <Route path="/bookShop/bestseller" element={<BestSeller />} />
        <Route path="/bookShop/Search" element={<Search />} />
        <Route path="/bookShop/NY" element={<NYRPage />} />
      </Routes>
    </div>
  );
}

export default App;
