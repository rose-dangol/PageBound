import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-heading">Track your books & talk about them</div>
          <div className="hero-subtitle">
            Pagebound is a social reading site ✨
          </div>
          <div className="login-signup">
            <Link to="/auth" className="signup-home">Sign up for free</Link>
            <button className="login-home">Log In</button>
          </div>
        </div>
        <div className="features-container">
          <div className="feature blue">
            <h2> Tools for modern book tracking </h2>
            <p> 
              Rate and review the way you always wanted with half-stars, emojis,
              and sub-ratings. ⭐️ Mark a book as paused or DNF.
            </p>
          </div>
          <div className="feature cyan">
            <h2>Every book has a forum</h2>
            <p>
              No more bouncing between Goodreads and Reddit/Discord; discuss and
              keep track of your books in one place. 💬
            </p>
          </div>
          <div className="feature red">
            <h2>
              Read with others, but read what you want
            </h2>
            <p>
              When you're reading a book, sort forum posts by % read to see what
              others thought and reacted to.👀
            </p>
          </div>
          <div className="feature orange">
            <h2>Quests gamify reading</h2>
            <p>
              Join themed reading challenges and earn badges as you read. Find
              like-minded readers on the same Quests as you. 🏆
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
