import React, { Component } from "react";
import { connect } from "react-redux";

class ContentPage extends Component {
  state = {
    content: "",
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

  onContentClick = (event) => {
    this.props.dispatch({
      type: "SET_UNDERSTANDING_FEEDBACK",
      payload: this.state,
    });
    this.props.history.push("/supported");
  };

  render() {
    return (
      <div>
        <h3> How are you understanding the content?</h3>

        <div>
          <input type="text" onChange={this.onInputChange("content")}></input>
          <button onClick={this.onContentClick}> Next </button>
        </div>
      </div>
    );
  }
}

export default connect()(ContentPage);
