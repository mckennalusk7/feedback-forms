import React, { Component } from "react";
import { connect } from "react-redux";

class CommentsPage extends Component {
  state = {
    comments: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onCommentsClick = (event) => {
    this.props.dispatch({
      type: "SET_COMMENTS_FEEDBACK",
      payload: this.state,
    });
    this.props.history.push("/review");
  };

  render() {
    return (
      <div>
        <h3> Additional Comments?</h3>
        <div>
          <input type="text" onChange={this.onInputChange("comments")}></input>
          <button onClick={this.onCommentsClick}> Next </button>
        </div>
      </div>
    );
  }
}

export default connect()(CommentsPage);
