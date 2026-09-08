function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={onClick}>

      <img
        src={book.coverImage}
        alt={book.title}
      />

      <div className="book-info">

        <h2>{book.title}</h2>

        <p className="author">
          By {book.author}
        </p>

        <p className="category">
          {book.category}
        </p>

        <div className="card-bottom">

          <span>⭐ {book.rating}</span>

          <span>₹{book.price}</span>

        </div>

      </div>

    </div>
  );
}

export default BookCard;