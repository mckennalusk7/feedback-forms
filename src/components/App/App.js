import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FeelingPage from "../Pages/FeelingPage/FeelingPage";
import ContentPage from "../Pages/ContentPage/ContentPage";
import SupportedPage from "../Pages/SupportedPage/SupportedPage";
import CommentsPage from "../Pages/CommentsPage/CommentsPage";
import ReviewFeedback from "../Pages/ReviewFeedback/ReviewFeedback";
import CompletedPage from "../Pages/CompletedPage/CompletedPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title"> Daily Feedback!</h1>

            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <div>
            <Route exact path="/" component={FeelingPage} />
            <Route path="/content" component={ContentPage} />
            <Route path="/supported" component={SupportedPage} />
            <Route path="/comments" component={CommentsPage} />
            <Route path="/review" component={ReviewFeedback} />
            <Route path="/completed" component={CompletedPage} />
          </div>

          <br />
        </Router>
      </div>
    );
  }
}

export default App;
