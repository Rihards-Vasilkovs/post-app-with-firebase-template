import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  // Track the active link
  const [activeLink, setActiveLink] = useState(null);

  // Image URLs for each state (active and inactive)
  const images = {
    search: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Search-Active.svg",
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Search-Innactive.svg",
    },
    articles: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Article-Active.svg", // Replace with the actual active image URL
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Article-Innactive.svg", // Replace with the actual active image URL // Replace with the actual inactive image URL
    },
    createPost: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/AddMushroom-Active.svg", // Replace with the actual active image URL
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/AddMushroom-Innactive.svg", // Replace with the actual inactive image URL
    },
    forum: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Froum-Active.svg", // Replace with the actual active image URL
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Forum-Innactive.svg", // Replace with the actual inactive image URL
    },
    profile: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Profile-Active.svg", // Replace with the actual active image URL
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Profile-Innactive.svg", // Replace with the actual inactive image URL
    },
  };

  return (
    <nav>
      <NavLink
        to="/"
        className={activeLink === "search" ? "active" : ""}
        onClick={() => setActiveLink("search")}
      >
        <div className="nav-item">
          <img
            src={
              activeLink === "search"
                ? images.search.active
                : images.search.inactive
            }
            alt="Search Icon"
            className="nav-icon"
          />
          <span className="nav-label">Search</span>
        </div>
      </NavLink>

      <NavLink
        to="/articles"
        className={activeLink === "articles" ? "active" : ""}
        onClick={() => setActiveLink("articles")}
      >
        <div className="nav-item">
          <img
            src={
              activeLink === "articles"
                ? images.articles.active
                : images.articles.inactive
            }
            alt="Articles Icon"
            className="nav-icon"
          />
          <span className="nav-label">Articles</span>
        </div>
      </NavLink>

      <NavLink
        to="/post"
        className={activeLink === "createPost" ? "active" : ""}
        onClick={() => setActiveLink("createPost")}
      >
        <div className="nav-item">
          <img
            src={
              activeLink === "createPost"
                ? images.createPost.active
                : images.createPost.inactive
            }
            alt="Create Post Icon"
            className="nav-icon"
          />
          <span className="nav-label">Create Post</span>
        </div>
      </NavLink>

      <NavLink
        to="/forum"
        className={activeLink === "forum" ? "active" : ""}
        onClick={() => setActiveLink("forum")}
      >
        <div className="nav-item">
          <img
            src={
              activeLink === "forum"
                ? images.forum.active
                : images.forum.inactive
            }
            alt="Forum Icon"
            className="nav-icon"
          />
          <span className="nav-label">Forum</span>
        </div>
      </NavLink>

      <NavLink
        to="/profile"
        className={activeLink === "profile" ? "active" : ""}
        onClick={() => setActiveLink("profile")}
      >
        <div className="nav-item">
          <img
            src={
              activeLink === "profile"
                ? images.profile.active
                : images.profile.inactive
            }
            alt="Profile Icon"
            className="nav-icon"
          />
          <span className="nav-label">Profile</span>
        </div>
      </NavLink>
    </nav>
  );
}
