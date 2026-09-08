function BookPopup({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>

      <div
        className="book-popup"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        {/* Book Image */}
        <div className="popup-image">
          <img
            src={book.coverImage}
            alt={book.title}
          />
        </div>

        {/* Book Details */}
        <div className="popup-details">

          <h2>{book.title}</h2>

          <p className="popup-author">
            By {book.author}
          </p>

          <span className="popup-category">
            {book.category}
          </span>

          <p className="popup-description">
            {book.description}
          </p>

          <div className="book-info-grid">

            <div>
              <strong>⭐ Rating</strong>
              <span>{book.rating}</span>
            </div>

            <div>
              <strong>💰 Price</strong>
              <span>₹{book.price}</span>
            </div>

            <div>
              <strong>📅 Published</strong>
              <span>{book.publishedYear}</span>
            </div>

            <div>
              <strong>🌐 Language</strong>
              <span>{book.language}</span>
            </div>

            <div>
              <strong>📖 Pages</strong>
              <span>{book.pages}</span>
            </div>

            <div>
              <strong>🏢 Publisher</strong>
              <span>{book.publisher}</span>
            </div>

          </div>

          <button className="buy-button">
            Buy Now - ₹{book.price}
          </button>

        </div>

      </div>
    </div>
  );
}

export default BookPopup;