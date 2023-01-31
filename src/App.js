import "./App.css";
import Header from "./components/header/Header";
import CardCont from "./components/home/CardCont";
import Book from "./components/Book";
import { Routes, Route } from "react-router-dom";
import Search from "./components/header/Search";
import BestSeller from "./components/BestSeller"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/*" element={<CardCont />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
