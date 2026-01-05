import React from "react";
import Header from "../components/Header";
import "../styles/SearchPage.css";

const SEARCH_RESULTS = [
  { id: 1, title: "The Da Vinci Code", author: "Dan Brown", rating: 3.94, votes: "2,513,829", published: 2003, cover: "/fantasys/F01.jpg" },
  { id: 2, title: "Angels & Demons", author: "Dan Brown", rating: 3.93, votes: "3,384,555", published: 2000, cover: "/fantasys/F02.jpg" },
  { id: 3, title: "Leonardo da Vinci", author: "Walter Isaacson", rating: 4.18, votes: "127,857", published: 2017, cover: "/fantasys/F03.jpg" },
];

export default function SearchPage() {
  return (
    <div className="search-page">
      <Header />
      
      <div className="search-container">
        <main className="search-results-main">
          <h1 className="page-title">Search</h1>

          {/* BẢNG LỌC PHÍA TRÊN (SEARCH BOX FILTER) */}
          <div className="search-filter-box">
            <div className="search-input-row">
              <input 
                type="text" 
                placeholder="Title / Author / ISBN" 
                className="main-search-input" 
              />
              <button className="main-search-btn">Search</button>
            </div>
            <div className="search-options-row">
              <label className="radio-option">
                <input type="radio" name="search-type" defaultChecked /> 
                <span className="radio-custom"></span> all
              </label>
              <label className="radio-option">
                <input type="radio" name="search-type" /> 
                <span className="radio-custom"></span> title
              </label>
              <label className="radio-option">
                <input type="radio" name="search-type" /> 
                <span className="radio-custom"></span> author
              </label>
            </div>
          </div>

          {/* TAB ĐIỀU HƯỚNG PHỤ */}
          <div className="search-tabs">
            <span className="search-tab active">Books</span>
            <span className="search-tab">Groups</span>
            <span className="search-tab">Quotes</span>
            <span className="search-tab">People</span>
          </div>

          <p className="results-count">Page 1 of about 8817046 results (0.43 seconds)</p>

          <div className="results-list">
            {SEARCH_RESULTS.map((book) => (
              <div key={book.id} className="search-book-item">
                <img src={book.cover} alt={book.title} className="search-book-cover" />
                <div className="search-book-info">
                  <h3 className="search-book-title">{book.title}</h3>
                  <p className="search-book-author">by {book.author}</p>
                  <div className="search-book-rating">
                    <span className="stars-red">★★★★☆</span>
                    <span className="rating-stats">
                       {book.rating} avg rating — {book.votes} ratings — published {book.published}
                    </span>
                  </div>
                  <div className="search-action-row">
                    <button className="btn-wtr-green">Want to Read</button>
                    <button className="btn-get-copy">Get a copy</button>
                  </div>
                  <p className="rate-text">Rate this book</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* CỘT PHẢI: RELATED SHELVES */}
        <aside className="search-sidebar">
          <div className="sidebar-widget">
            <h3 className="sidebar-title-black">RELATED SHELVES</h3>
            <ul className="related-links-small">
              <li>fiction (18,423,117)</li>
              <li>non-fiction (10,225,796)</li>
              <li>mystery (6,395,049)</li>
              <li>history (4,741,374)</li>
              <li className="more-shelves">More shelves...</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}