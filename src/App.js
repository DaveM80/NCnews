import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import  TopNav  from "./components/TopNav";
import ArticlesPage  from "./components/ArticlesPage";
import SingleArticlePage from "./components/SingleArticlePage";



class App extends Component {

  state = { username: "tickle122" };


  render() {
    return (
      <div className="App">

        <TopNav username={this.state.username} />
        <Router primary={false}>
          <ArticlesPage path="/" username={this.state.username}/>
          <SingleArticlePage path="/articles/:article_id" username={this.state.username}/>
          <ArticlesPage path="/:topic" username={this.state.username}/>
        </Router>
      </div>
    );
  }
}

export default App;
