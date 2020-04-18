import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  onFeelingsClick = (type) => (event) => {
    this.props.dispatch({ type: "SET_FEELINGS_TYPE", payload: type });
    this.props.history.push("content");
  };

  render() {
    return (
      <div>
        <h3> How are you Feeling?</h3>

        <div>
          <input type="text"></input>
          <button onClick={this.onFeelingsClick("nextpage")}> Next </button>
        </div>
      </div>
    );
  }
}

export default connect()(FeelingPage);
