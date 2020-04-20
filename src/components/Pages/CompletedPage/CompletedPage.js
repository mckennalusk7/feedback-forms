import React, { Component } from "react";
import { connect } from "react-redux";

class CompletedPage extends Component {
  handleClick = (event) => {
    this.props.dispatch({ type: "SET_COMPLETED_PAGE" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Feedback Submitted!</h1>
        <button onClick={this.handleClick}>Start Over</button>
      </div>
    );
  }
}

export default connect()(CompletedPage);
