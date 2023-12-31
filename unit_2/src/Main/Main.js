import React from "react";
import "./Main.css";
import articles from "../data/articles.json";

export default function Main() {
  return (
    <div className="Main">
      {articles.map((item) => (
        <section>
          <h2>{item.title}</h2>
          <div>{item.body}</div>
        </section>
      ))}
    </div>
  );
}
