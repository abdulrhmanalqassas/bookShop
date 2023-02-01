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
        <Route path="/book" element={<Book />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/NY" element={<NYRPage />} />
      </Routes>
    </div>
  );
}

export default App;
