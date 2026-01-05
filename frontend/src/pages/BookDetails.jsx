import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/BookDetails.css";

export default function BookDetails() {
  const navigate = useNavigate();
  return (
    <div className="book-details-page">
      <Header />
      
      <div className="details-container">
        {/* CỘT TRÁI: FIXED SIDEBAR */}
        <aside className="details-left-col">
          <div className="sticky-sidebar">
            <img 
              src="/cover.jpg" 
              alt="Book Cover" 
              className="main-book-cover" 
            />
            <div className="book-actions-fixed">
              <button className="btn-wtr-full">Want to Read</button>
              <div className="rate-this-box">
                <div className="stars-outline">☆☆☆☆☆</div>
                <p>Rate this book</p>
              </div>
            </div>
          </div>
        </aside>

        {/* --- CỘT PHẢI: CUỘN TỰ DO (SCROLLABLE) --- */}
        <main className="details-right-col">
          <section className="main-book-header">
            <h1 className="book-title-display">Dan Heng - Imbibitor Lunae</h1>
            <p className="book-author-display">
              by <span className="author-name">Honkai: Star Rail</span>
            </p>
            
            <div className="rating-summary-row">
              <span className="stars-fill">★★★★☆</span>
              <span className="avg-rating-bold">4.39</span>
              <span className="dot-sep">·</span>
              <span className="rating-count">2,513,829 ratings</span>
              <span className="dot-sep">·</span>
              <span className="review-count">125,401 reviews</span>
            </div>
          </section>

          <section className="book-description-section">
            <p className="description-text">
              In the year 4800 of the Planetary Calendar, Vidyadhara and Yuque allied, rewriting their oath: Gold and stone may wear away, but an oath cannot be broken. - "Xianzhou Tongjian - Five Dragons Go Far Away".<br />
              In the year 7379 of the Planetary Calendar, Dan Feng rebelled, and the sacred tree was in danger. The Cloud Cavalry and the Dragon Master Vidyadhara joined forces to attack. - "Xianzhou Tongjian - Cloud Cavalry's War Report".<br />
              The noble Dragon Lord, blessed by heaven with spiritual energy. Riding on clouds to create rain, shaping creation.
              <br /><br />
              He dreamed of bearing responsibility, performing a rain-praying dance, and sealing the Tree of Creation.<br />
              He dreamed of entering a battlefield where arrows rained down, and heaven punished him.<br />
              He dreamed of being bound to a jade pillar, long nails piercing his body, sealed in darkness.<br />
              He dreamed of wandering aimlessly in the darkness, pursued by shadows.
              <br /><br />
              In all his dreams, he was a dragon, a hero, a villain, but never someone who experienced love, hate, joy, or sorrow like them.
            </p>
            {/* PHẦN THÔNG TIN CHI TIẾT MỚI THÊM */}
            <div className="book-details-table">
              <div className="detail-row">
                <span className="detail-label">Format</span>
                <span className="detail-value">Hardcover, 552 pages</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Published</span>
                <span className="detail-value">March 14, 2006 by Knopf (first published September 1, 2005)</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">ISBN</span>
                <span className="detail-value">0375831002 (ISBN13: 9780375831003)</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Language</span>
                <span className="detail-value">English</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Original Title</span>
                <span className="detail-value">The Book Thief</span>
              </div>
            </div>

            <div className="book-genres-row">
              <span className="meta-label">Genres</span>
              <nav className="genre-tags">
                <span onClick={() => navigate("/genrefantasy")}>Historical Fiction</span>, 
                <span onClick={() => navigate("/genrefantasy")}>Fiction</span>, 
                <span onClick={() => navigate("/genrefantasy")}>Young Adult</span>, 
                <span onClick={() => navigate("/genrefantasy")}>Classics</span>
              </nav>
            </div>
            <div className="meta-item">
              <span className="meta-label">Published</span>
              <span className="meta-value">March 14, 2005 by Knopf</span>
            </div>
          </section>

          <hr className="section-divider" />

          <section className="about-author-section">
            <h3 className="sub-header">About the author</h3>
            <div className="author-profile-box">
              <img 
                src="/avatar.jpg" 
                alt="Honkai: Star Rail" 
                className="author-large-avatar" 
              />
              <div className="author-info-main">
                <div className="author-name-row">
                  <span className="author-full-name">Markus Zusak</span>
                  <span className="follower-count">256,401 followers</span>
                </div>
                <button className="btn-follow-author">Follow Author</button>
                <p className="author-bio-text">
                  Honkai: Star Rail is the latest galactic adventure RPG game developed by HoYoverse. 
                  In this product, players will board the Astral Fleet, experience dazzling magical wonders throughout the galaxy, the sense of adventure and drama create a harmonious rhythm for the journey.
                  Players will meet new companions through each world, as well as meet many familiar faces, together to resolve the dispute caused by "Stellaron", to reveal its mysteries.
                </p>
              </div>
            </div>
          </section>

          <hr className="divider" />

          <section className="ratings-reviews-section">
            <h3 className="sub-header">Ratings & Reviews</h3>
            
            <div className="rating-distribution-container">
              <div className="rating-big-number">
                <h2>4.39</h2>
                <div className="stars-gold-large">★★★★☆</div>
                <p>2,513,829 ratings</p>
              </div>

              <div className="rating-bars-list">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="bar-row">
                    <span className="star-label">{star} star</span>
                    <div className="bar-bg-grey">
                      <div 
                        className="bar-fill-orange" 
                        style={{ width: `${star === 5 ? 60 : star === 4 ? 25 : 10}%` }}
                      ></div>
                    </div>
                    <span className="bar-count">{(star * 123456).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-review-status">
              <div className="user-avatar-placeholder"></div>
              <div className="review-prompt">
                <p>What do you think?</p>
                <div className="stars-outline-big">☆☆☆☆☆</div>
                <button className="btn-write-review">Write a Review</button>
              </div>
            </div>
          </section>

          <hr className="divider" />

          {/* PHẦN BÌNH LUẬN (DÀI ĐỂ KIỂM TRA HIỆU ỨNG CUỘN) */}
          <section className="reviews-section">
            <h3 className="section-header">COMMUNITY REVIEWS</h3>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="review-item">
                <div className="review-user">
                  <img src={`/avatars/avatar${i}.jpg`} alt="User" className="user-avatar-mini" />
                  <p><strong>Reviewer {i}</strong> rated it ★★★★☆</p>
                </div>
                <p className="review-content">
                  This book is a masterpiece. The narration by Death is a unique perspective that I've never encountered before. 
                  Zusak's writing is poetic and heartbreaking. I cried so much at the end...
                </p>
                <div className="review-footer">
                  <span>July {i+10}, 2025</span>
                  <span className="like-link">Like • Comment</span>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}