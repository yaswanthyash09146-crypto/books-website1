import { useState } from "react";
import { books } from "./data/books";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookPopup from "./components/BookPopup";

import "./style.css";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="app">

      <Navbar />

      <main className="container">
        <h1>Our Books</h1>

        <p className="subtitle">
          Explore our collection of amazing books
        </p>

        <BookList
          books={books}
          onBookClick={setSelectedBook}
        />
      </main>

      {selectedBook && (
        <BookPopup
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

    </div>
  );
}

export default App;
