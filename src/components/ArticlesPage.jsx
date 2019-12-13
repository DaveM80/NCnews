import ArticleList from "./ArticlesList";
import React from "react";

function ArticlesPage(props) {
  return (
    <div>
      <h2>{props.topic || "Home"}</h2>
      <ArticleList topic={props.topic && props.topic.toLowerCase()} username={props.username}/>
    </div>
  );
}

export default ArticlesPage;
