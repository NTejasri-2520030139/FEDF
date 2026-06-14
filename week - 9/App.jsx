import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Layout from "./components/Layout";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/addbook" element={<AddBook books={books} setBooks={setBooks} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;