import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import  Header  from "./components/Header";
import ArticlesPage  from "./components/ArticlesPage";
import SingleArticlePage from "./components/SingleArticlePage";
import ErrorPage from "./components/ErrorPage";



class App extends Component {

  state = { username: "tickle122" };


  render() {
    return (
      <div className="App">
        <Header username={this.state.username}/>
        <Router primary={false}>
          <ArticlesPage path="/" username={this.state.username}/>
          <SingleArticlePage path="/articles/:article_id" username={this.state.username}/>
          <ArticlesPage path="/:topic" username={this.state.username}/>
          <ErrorPage default/>
        </Router>
      </div>
    );
  }
}

export default App;
