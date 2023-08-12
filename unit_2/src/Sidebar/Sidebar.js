import React from "react";
import "./Sidebar.css";
import articles from "../data/articles.json";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          {articles.map((item) => (
            <li>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
